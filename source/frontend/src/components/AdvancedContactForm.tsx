/**
 * 高级联系表单组件
 * 商用级别的智能表单，支持多种联系类型
 */

import React, { useState, useEffect, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  FormHelperText,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  Divider,
  Collapse,
  Card,
  CardContent,
  CardActionArea,
  Autocomplete,
  Stack,
} from '@mui/material'
import {
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon,
  DirectionsCar as CarIcon,
  HelpOutline as HelpIcon,
  Build as BuildIcon,
  Business as BusinessIcon,
} from '@mui/icons-material'
import { contactFormSchema, ContactFormFields } from '@/models/AdvancedContactForm'
import { ContactType, PreferredContactMethod, InquiryCategory, IssueType } from '@/types/ContactForm'
import { sendContactForm } from '@/services/EmailService'
import { trackFormSubmission } from '@/utils/ga4'
import env from '@/config/env.config'
import { strings } from '@/lang/advanced-contact'
import { strings as commonStrings } from '@/lang/common'
import * as langHelper from '@/utils/langHelper'
import '@/assets/css/advanced-contact-form.css'

// Vehicle data interface
interface Vehicle {
  id: string
  name: { ja: string; en: string; zh: string }
  brand: string
  model: { ja: string; en: string; zh: string }
  category: { ja: string; en: string; zh: string }
  price: number
  seats: number
  transmission: string
  isSuperior: boolean
  image: string
}

// Location data interface
interface Location {
  id: string
  name: { ja: string; en: string; zh: string }
  address: { ja: string; en: string; zh: string }
}

interface AdvancedContactFormProps {
  initialType?: ContactType
  className?: string
}

const AdvancedContactForm: React.FC<AdvancedContactFormProps> = ({
  initialType,
  className,
}) => {
  const [contactType, setContactType] = useState<ContactType | null>(initialType || null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [homeDeliveryPickup, setHomeDeliveryPickup] = useState(false)
  const [homeDeliveryReturn, setHomeDeliveryReturn] = useState(false)

  // Ref for form section to scroll to
  const formSectionRef = useRef<HTMLDivElement>(null)

  // 类型安全的错误访问辅助函数
  const getFieldError = (field: string): any => {
    return (errors as any)[field]
  }

  // Handle contact type selection with auto-scroll
  const handleContactTypeSelect = (type: ContactType) => {
    setContactType(type)

    // Scroll to form section after a short delay to ensure DOM has updated
    setTimeout(() => {
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  // Load vehicles and locations data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load vehicles
        const vehiclesRes = await fetch('/data/vehicles.json')
        const vehiclesData = await vehiclesRes.json()
        setVehicles(vehiclesData || [])

        // Load locations
        const locationsRes = await fetch('/data/locations.json')
        const locationsData = await locationsRes.json()
        setLocations(locationsData.locations || [])
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }
    loadData()
  }, [])

  // 表单实例
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContactMethod: PreferredContactMethod.EMAIL,
    },
  })

  // 监听联系类型变化
  useEffect(() => {
    if (contactType) {
      setValue('contactType', contactType)
    }
  }, [contactType, setValue])

  // 表单提交处理
  const onSubmit = async (data: ContactFormFields) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      console.log('📝 提交表单数据:', data)

      const result = await sendContactForm(data as any)

      if (result.success) {
        setSubmitSuccess(true)

        // Track successful form submission in GA4
        if (env.GOOGLE_ANALYTICS_ENABLED) {
          trackFormSubmission(data.contactType, true)
        }

        // 3秒后重置表单
        setTimeout(() => {
          reset()
          setContactType(null)
          setSubmitSuccess(false)
        }, 3000)
      } else {
        setSubmitError(result.message || '发送失败，请稍后重试')

        // Track failed form submission
        if (env.GOOGLE_ANALYTICS_ENABLED) {
          trackFormSubmission(data.contactType, false)
        }
      }
    } catch (error: any) {
      console.error('提交错误:', error)
      setSubmitError(error.message || '发生未知错误')

      // Track error in form submission
      if (env.GOOGLE_ANALYTICS_ENABLED && data.contactType) {
        trackFormSubmission(data.contactType, false)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // 联系类型选项配置
  const contactTypeOptions = [
    {
      type: ContactType.VEHICLE_BOOKING,
      icon: <CarIcon sx={{ fontSize: 48 }} />,
      title: strings.VEHICLE_BOOKING,
      description: strings.VEHICLE_BOOKING_DESC,
    },
    {
      type: ContactType.GENERAL_INQUIRY,
      icon: <HelpIcon sx={{ fontSize: 48 }} />,
      title: strings.GENERAL_INQUIRY,
      description: strings.GENERAL_INQUIRY_DESC,
    },
    {
      type: ContactType.TECHNICAL_SUPPORT,
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      title: strings.TECHNICAL_SUPPORT,
      description: strings.TECHNICAL_SUPPORT_DESC,
    },
    {
      type: ContactType.BUSINESS_PARTNERSHIP,
      icon: <BusinessIcon sx={{ fontSize: 48 }} />,
      title: strings.BUSINESS_PARTNERSHIP,
      description: strings.BUSINESS_PARTNERSHIP_DESC,
    },
  ]

  // 渲染联系类型选择器
  const renderContactTypeSelector = () => (
    <Box className="contact-type-selector">
      <Typography variant="h5" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
        {strings.CONTACT_TYPE_TITLE}
      </Typography>

      <Box className="contact-type-grid">
        {contactTypeOptions.map((option) => (
          <Card
            key={option.type}
            className={`contact-type-card ${contactType === option.type ? 'selected' : ''}`}
            elevation={contactType === option.type ? 8 : 2}
          >
            <CardActionArea onClick={() => handleContactTypeSelect(option.type)}>
              <CardContent className="contact-type-content">
                <Box className="contact-type-icon">{option.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {option.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {option.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  )

  // 渲染基础联系信息
  const renderBasicInfo = () => (
    <Collapse in={contactType !== null}>
      <Paper elevation={2} className="form-section" ref={formSectionRef}>
        <Typography variant="h6" gutterBottom>
          {strings.CONTACT_INFO_TITLE}
        </Typography>

        <TextField
          fullWidth
          label={`${strings.NAME_LABEL} *`}
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          margin="normal"
        />

        <TextField
          fullWidth
          label={`${strings.EMAIL_LABEL} *`}
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
        />

        <TextField
          fullWidth
          label={`${strings.PHONE_LABEL} *`}
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          margin="normal"
          placeholder={strings.PHONE_PLACEHOLDER}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>{strings.PREFERRED_CONTACT}</InputLabel>
          <Controller
            name="preferredContactMethod"
            control={control}
            render={({ field }) => (
              <Select {...field} label={strings.PREFERRED_CONTACT}>
                <MenuItem value={PreferredContactMethod.EMAIL}>{strings.CONTACT_EMAIL}</MenuItem>
                <MenuItem value={PreferredContactMethod.PHONE}>{strings.CONTACT_PHONE}</MenuItem>
                <MenuItem value={PreferredContactMethod.WHATSAPP}>{strings.CONTACT_WHATSAPP}</MenuItem>
                <MenuItem value={PreferredContactMethod.LINE}>{strings.CONTACT_LINE}</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Paper>
    </Collapse>
  )

  // 渲染一般咨询表单
  const renderGeneralInquiryForm = () => (
    <Collapse in={contactType === ContactType.GENERAL_INQUIRY}>
      <Paper elevation={2} className="form-section">
        <Typography variant="h6" gutterBottom>
          {strings.INQUIRY_DETAILS}
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>{`${strings.INQUIRY_CATEGORY} *`}</InputLabel>
          <Controller
            name="generalInquiry.category"
            control={control}
            defaultValue={InquiryCategory.OTHER}
            render={({ field }) => (
              <Select {...field} label={`${strings.INQUIRY_CATEGORY} *`}>
                <MenuItem value={InquiryCategory.PRICING}>{strings.CATEGORY_PRICING}</MenuItem>
                <MenuItem value={InquiryCategory.VEHICLE_INFO}>{strings.CATEGORY_VEHICLE_INFO}</MenuItem>
                <MenuItem value={InquiryCategory.POLICY}>{strings.CATEGORY_POLICY}</MenuItem>
                <MenuItem value={InquiryCategory.INSURANCE}>{strings.CATEGORY_INSURANCE}</MenuItem>
                <MenuItem value={InquiryCategory.OTHER}>{strings.CATEGORY_OTHER}</MenuItem>
              </Select>
            )}
          />
          {getFieldError('generalInquiry')?.category && (
            <FormHelperText error>{getFieldError('generalInquiry').category.message}</FormHelperText>
          )}
        </FormControl>

        <TextField
          fullWidth
          label={`${strings.INQUIRY_SUBJECT} *`}
          {...register('generalInquiry.subject')}
          error={!!getFieldError('generalInquiry')?.subject}
          helperText={getFieldError('generalInquiry')?.subject?.message}
          margin="normal"
          placeholder={strings.INQUIRY_SUBJECT_PLACEHOLDER}
        />

        <TextField
          fullWidth
          multiline
          rows={6}
          label={`${strings.INQUIRY_MESSAGE} *`}
          {...register('generalInquiry.message')}
          error={!!getFieldError('generalInquiry')?.message}
          helperText={getFieldError('generalInquiry')?.message?.message || strings.INQUIRY_MESSAGE_HELPER}
          margin="normal"
          placeholder={strings.INQUIRY_MESSAGE_PLACEHOLDER}
        />
      </Paper>
    </Collapse>
  )

  // 渲染技术支持表单
  const renderTechnicalSupportForm = () => (
    <Collapse in={contactType === ContactType.TECHNICAL_SUPPORT}>
      <Paper elevation={2} className="form-section">
        <Typography variant="h6" gutterBottom>
          {strings.SUPPORT_DETAILS}
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>{`${strings.ISSUE_TYPE} *`}</InputLabel>
          <Controller
            name="technicalSupport.issueType"
            control={control}
            defaultValue={IssueType.OTHER}
            render={({ field }) => (
              <Select {...field} label={`${strings.ISSUE_TYPE} *`}>
                <MenuItem value={IssueType.BOOKING_ISSUE}>{strings.ISSUE_BOOKING}</MenuItem>
                <MenuItem value={IssueType.WEBSITE_ISSUE}>{strings.ISSUE_WEBSITE}</MenuItem>
                <MenuItem value={IssueType.PAYMENT_ISSUE}>{strings.ISSUE_PAYMENT}</MenuItem>
                <MenuItem value={IssueType.COMPLAINT}>{strings.ISSUE_COMPLAINT}</MenuItem>
                <MenuItem value={IssueType.OTHER}>{strings.ISSUE_OTHER}</MenuItem>
              </Select>
            )}
          />
          {getFieldError('technicalSupport')?.issueType && (
            <FormHelperText error>{getFieldError('technicalSupport').issueType.message}</FormHelperText>
          )}
        </FormControl>

        <TextField
          fullWidth
          label={strings.ORDER_NUMBER}
          {...register('technicalSupport.orderNumber')}
          error={!!getFieldError('technicalSupport')?.orderNumber}
          helperText={getFieldError('technicalSupport')?.orderNumber?.message}
          margin="normal"
          placeholder={strings.ORDER_NUMBER_PLACEHOLDER}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>{`${strings.URGENCY} *`}</InputLabel>
          <Controller
            name="technicalSupport.urgency"
            control={control}
            defaultValue="medium"
            render={({ field }) => (
              <Select {...field} label={`${strings.URGENCY} *`}>
                <MenuItem value="low">{strings.URGENCY_LOW}</MenuItem>
                <MenuItem value="medium">{strings.URGENCY_MEDIUM}</MenuItem>
                <MenuItem value="high">{strings.URGENCY_HIGH}</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <TextField
          fullWidth
          multiline
          rows={6}
          label={`${strings.ISSUE_DESCRIPTION} *`}
          {...register('technicalSupport.description')}
          error={!!getFieldError('technicalSupport')?.description}
          helperText={getFieldError('technicalSupport')?.description?.message || strings.ISSUE_DESCRIPTION_HELPER}
          margin="normal"
          placeholder={strings.ISSUE_DESCRIPTION_PLACEHOLDER}
        />
      </Paper>
    </Collapse>
  )

  // 渲染企业合作表单
  const renderBusinessPartnershipForm = () => (
    <Collapse in={contactType === ContactType.BUSINESS_PARTNERSHIP}>
      <Paper elevation={2} className="form-section">
        <Typography variant="h6" gutterBottom>
          {strings.PARTNERSHIP_DETAILS}
        </Typography>

        <TextField
          fullWidth
          label={`${strings.COMPANY_NAME} *`}
          {...register('businessPartnership.companyName')}
          error={!!getFieldError('businessPartnership')?.companyName}
          helperText={getFieldError('businessPartnership')?.companyName?.message}
          margin="normal"
        />

        <TextField
          fullWidth
          label={`${strings.CONTACT_PERSON} *`}
          {...register('businessPartnership.contactPerson')}
          error={!!getFieldError('businessPartnership')?.contactPerson}
          helperText={getFieldError('businessPartnership')?.contactPerson?.message}
          margin="normal"
        />

        <TextField
          fullWidth
          label={`${strings.POSITION} *`}
          {...register('businessPartnership.position')}
          error={!!getFieldError('businessPartnership')?.position}
          helperText={getFieldError('businessPartnership')?.position?.message}
          margin="normal"
          placeholder={strings.POSITION_PLACEHOLDER}
        />

        <TextField
          fullWidth
          label={`${strings.PARTNERSHIP_TYPE} *`}
          {...register('businessPartnership.partnershipType')}
          error={!!getFieldError('businessPartnership')?.partnershipType}
          helperText={getFieldError('businessPartnership')?.partnershipType?.message}
          margin="normal"
          placeholder={strings.PARTNERSHIP_TYPE_PLACEHOLDER}
        />

        <TextField
          fullWidth
          label={strings.COMPANY_WEBSITE}
          {...register('businessPartnership.website')}
          error={!!getFieldError('businessPartnership')?.website}
          helperText={getFieldError('businessPartnership')?.website?.message}
          margin="normal"
          placeholder={strings.WEBSITE_PLACEHOLDER}
        />

        <TextField
          fullWidth
          multiline
          rows={6}
          label={`${strings.PARTNERSHIP_DESCRIPTION} *`}
          {...register('businessPartnership.description')}
          error={!!getFieldError('businessPartnership')?.description}
          helperText={getFieldError('businessPartnership')?.description?.message || strings.PARTNERSHIP_DESCRIPTION_HELPER}
          margin="normal"
          placeholder={strings.PARTNERSHIP_DESCRIPTION_PLACEHOLDER}
        />
      </Paper>
    </Collapse>
  )

  // 渲染车辆预订表单
  const renderVehicleBookingForm = () => {
    const currentLang = langHelper.getLanguage() as 'ja' | 'en' | 'zh'

    return (
      <Collapse in={contactType === ContactType.VEHICLE_BOOKING}>
        <Paper elevation={2} className="form-section">
          <Typography variant="h6" gutterBottom>
            {strings.BOOKING_DETAILS}
          </Typography>

          {/* Vehicle Selection */}
          <Controller
            name="vehicleBooking.vehicleId"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={vehicles}
                getOptionLabel={(option) =>
                  typeof option === 'string' ? option : (option.name[currentLang] || option.name.en)
                }
                value={selectedVehicle}
                onChange={(_, newValue) => {
                  setSelectedVehicle(newValue)
                  field.onChange(newValue?.id || '')
                  if (newValue) {
                    setValue('vehicleBooking.vehicleName', newValue.name[currentLang] || newValue.name.en)
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={strings.SELECT_VEHICLE}
                    placeholder={strings.SELECT_VEHICLE_PLACEHOLDER}
                    error={!!getFieldError('vehicleBooking')?.vehicleId}
                    helperText={getFieldError('vehicleBooking')?.vehicleId?.message}
                    margin="normal"
                  />
                )}
                renderOption={(props, option) => (
                  <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box>
                      <Typography variant="body1">{option.name[currentLang] || option.name.en}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        ¥{option.price.toLocaleString()}/day • {option.seats} seats
                      </Typography>
                    </Box>
                  </Box>
                )}
              />
            )}
          />

          {/* Pickup Details */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="date"
                label={strings.PICKUP_DATE}
                {...register('vehicleBooking.pickupDate')}
                error={!!getFieldError('vehicleBooking')?.pickupDate}
                helperText={getFieldError('vehicleBooking')?.pickupDate?.message}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="time"
                label={strings.PICKUP_TIME}
                {...register('vehicleBooking.pickupTime')}
                error={!!getFieldError('vehicleBooking')?.pickupTime}
                helperText={getFieldError('vehicleBooking')?.pickupTime?.message}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Controller
              name="vehicleBooking.homeDeliveryPickup"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e)
                        setHomeDeliveryPickup(e.target.checked)
                        if (!e.target.checked) {
                          setValue('vehicleBooking.pickupAddress', '')
                        }
                      }}
                    />
                  }
                  label={strings.HOME_DELIVERY_PICKUP}
                />
              )}
            />
          </Box>

          {!homeDeliveryPickup ? (
            <Controller
              name="vehicleBooking.pickupLocation"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={locations.map(loc => loc.name[currentLang] || loc.name.en)}
                  onChange={(_, newValue) => field.onChange(newValue || '')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={strings.PICKUP_LOCATION}
                      placeholder={strings.PICKUP_LOCATION_PLACEHOLDER}
                      error={!!getFieldError('vehicleBooking')?.pickupLocation}
                      helperText={getFieldError('vehicleBooking')?.pickupLocation?.message}
                      margin="normal"
                    />
                  )}
                />
              )}
            />
          ) : (
            <TextField
              fullWidth
              label={strings.PICKUP_ADDRESS}
              {...register('vehicleBooking.pickupAddress')}
              error={!!getFieldError('vehicleBooking')?.pickupAddress}
              helperText={getFieldError('vehicleBooking')?.pickupAddress?.message}
              margin="normal"
              placeholder={strings.PICKUP_ADDRESS_PLACEHOLDER}
            />
          )}

          {/* Return Details */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="date"
                label={strings.RETURN_DATE}
                {...register('vehicleBooking.returnDate')}
                error={!!getFieldError('vehicleBooking')?.returnDate}
                helperText={getFieldError('vehicleBooking')?.returnDate?.message}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="time"
                label={strings.RETURN_TIME}
                {...register('vehicleBooking.returnTime')}
                error={!!getFieldError('vehicleBooking')?.returnTime}
                helperText={getFieldError('vehicleBooking')?.returnTime?.message}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Controller
              name="vehicleBooking.homeDeliveryReturn"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e)
                        setHomeDeliveryReturn(e.target.checked)
                        if (!e.target.checked) {
                          setValue('vehicleBooking.returnAddress', '')
                        }
                      }}
                    />
                  }
                  label={strings.HOME_DELIVERY_RETURN}
                />
              )}
            />
          </Box>

          {!homeDeliveryReturn ? (
            <Controller
              name="vehicleBooking.returnLocation"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={locations.map(loc => loc.name[currentLang] || loc.name.en)}
                  onChange={(_, newValue) => field.onChange(newValue || '')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={strings.RETURN_LOCATION}
                      placeholder={strings.RETURN_LOCATION_PLACEHOLDER}
                      error={!!getFieldError('vehicleBooking')?.returnLocation}
                      helperText={getFieldError('vehicleBooking')?.returnLocation?.message}
                      margin="normal"
                    />
                  )}
                />
              )}
            />
          ) : (
            <TextField
              fullWidth
              label={strings.RETURN_ADDRESS}
              {...register('vehicleBooking.returnAddress')}
              error={!!getFieldError('vehicleBooking')?.returnAddress}
              helperText={getFieldError('vehicleBooking')?.returnAddress?.message}
              margin="normal"
              placeholder={strings.RETURN_ADDRESS_PLACEHOLDER}
            />
          )}

          {/* Passengers and Drivers */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="number"
                label={strings.PASSENGERS}
                {...register('vehicleBooking.passengers', { valueAsNumber: true })}
                error={!!getFieldError('vehicleBooking')?.passengers}
                helperText={getFieldError('vehicleBooking')?.passengers?.message}
                placeholder={strings.PASSENGERS_PLACEHOLDER}
                inputProps={{ min: 1 }}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="number"
                label={strings.ADDITIONAL_DRIVERS}
                {...register('vehicleBooking.additionalDrivers', { valueAsNumber: true })}
                error={!!getFieldError('vehicleBooking')?.additionalDrivers}
                helperText={strings.ADDITIONAL_DRIVERS_HELPER}
                inputProps={{ min: 0 }}
              />
            </Box>
          </Box>

          {/* Insurance Option */}
          <Box sx={{ mt: 2, mb: 2 }}>
            <Controller
              name="vehicleBooking.insurance"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={strings.INSURANCE_OPTION}
                />
              )}
            />
            <Typography variant="caption" color="text.secondary" display="block" sx={{ ml: 4, mt: -1 }}>
              {strings.INSURANCE_NOTE}
            </Typography>
          </Box>

          {/* Additional Options */}
          <Typography variant="subtitle2" sx={{ mt: 3, mb: 2, fontWeight: 600 }}>
            {strings.ADDITIONAL_OPTIONS}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'stretch' }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <TextField
                fullWidth
                type="number"
                label={strings.BABY_SEATS}
                {...register('vehicleBooking.babySeats', { valueAsNumber: true })}
                error={!!getFieldError('vehicleBooking')?.babySeats}
                helperText={strings.BABY_SEATS_HELPER}
                inputProps={{ min: 0 }}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100%',
                gap: 1
              }}>
                <Controller
                  name="vehicleBooking.etc"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label={strings.ETC_OPTION}
                    />
                  )}
                />
                <Controller
                  name="vehicleBooking.phoneHolder"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label={strings.PHONE_HOLDER_OPTION}
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>

          {/* Special Requests */}
          <TextField
            fullWidth
            multiline
            rows={4}
            label={strings.SPECIAL_REQUESTS}
            {...register('vehicleBooking.specialRequests')}
            error={!!getFieldError('vehicleBooking')?.specialRequests}
            helperText={getFieldError('vehicleBooking')?.specialRequests?.message}
            margin="normal"
            placeholder={strings.SPECIAL_REQUESTS_PLACEHOLDER}
          />
        </Paper>
      </Collapse>
    )
  }

  // 提交按钮
  const renderSubmitButton = () => (
    <Collapse in={contactType !== null}>
      <Box className="submit-section">
        {submitSuccess && (
          <Alert severity="success" icon={<CheckCircleIcon />} sx={{ mb: 2 }}>
            {strings.SUCCESS_MESSAGE}
          </Alert>
        )}

        {submitError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {submitError}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={isSubmitting || submitSuccess || contactType === null}
          startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
          className="submit-button"
        >
          {isSubmitting ? strings.SUBMITTING : strings.SUBMIT_BUTTON}
        </Button>
      </Box>
    </Collapse>
  )

  return (
    <Box className={`advanced-contact-form ${className || ''}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderContactTypeSelector()}
        {renderBasicInfo()}

        {/* 条件渲染不同类型的表单内容 */}
        {renderVehicleBookingForm()}
        {renderGeneralInquiryForm()}
        {renderTechnicalSupportForm()}
        {renderBusinessPartnershipForm()}

        {renderSubmitButton()}
      </form>
    </Box>
  )
}

export default AdvancedContactForm
