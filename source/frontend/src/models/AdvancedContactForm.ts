/**
 * 高级联系表单验证模型
 * 使用Zod进行类型安全验证
 */

import { z } from 'zod'
import { ContactType, InquiryCategory, IssueType, InsuranceType, PreferredContactMethod } from '@/types/ContactForm'
import { strings as commonStrings } from '@/lang/common'
import { strings } from '@/lang/advanced-contact'

// 电话号码验证（宽松格式，允许各种常见格式）
const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/

// 基础联系信息schema
const baseContactSchema = z.object({
  contactType: z.nativeEnum(ContactType),
  name: z.string().min(2, { message: strings.VALIDATION_NAME_MIN }),
  email: z.string().email(commonStrings.EMAIL_NOT_VALID),
  phone: z.string().regex(phoneRegex, { message: strings.VALIDATION_PHONE_INVALID }),
  preferredContactMethod: z.nativeEnum(PreferredContactMethod),
})

// 车辆预订schema
const vehicleBookingSchema = z.object({
  vehicleId: z.string().min(1, { message: strings.VALIDATION_VEHICLE_REQUIRED }),
  vehicleName: z.string().min(1, { message: strings.VALIDATION_VEHICLE_NAME_REQUIRED }),
  pickupDate: z.string().min(1, { message: strings.VALIDATION_PICKUP_DATE_REQUIRED }),
  pickupTime: z.string().min(1, { message: strings.VALIDATION_PICKUP_TIME_REQUIRED }),
  returnDate: z.string().min(1, { message: strings.VALIDATION_RETURN_DATE_REQUIRED }),
  returnTime: z.string().min(1, { message: strings.VALIDATION_RETURN_TIME_REQUIRED }),
  pickupLocation: z.string().min(1, { message: strings.VALIDATION_PICKUP_LOCATION_REQUIRED }),
  homeDeliveryPickup: z.boolean(),
  pickupAddress: z.string().optional(),
  returnLocation: z.string().min(1, { message: strings.VALIDATION_RETURN_LOCATION_REQUIRED }),
  homeDeliveryReturn: z.boolean(),
  returnAddress: z.string().optional(),
  sameLocation: z.boolean(),
  passengers: z.number().min(1, { message: strings.VALIDATION_PASSENGERS_MIN }).max(12, { message: strings.VALIDATION_PASSENGERS_MAX }),
  additionalDrivers: z.number().min(0, { message: strings.VALIDATION_DRIVERS_MIN }).max(5, { message: strings.VALIDATION_DRIVERS_MAX }),
  insurance: z.boolean(),
  babySeats: z.number().min(0, { message: strings.VALIDATION_BABY_SEATS_MIN }).max(4, { message: strings.VALIDATION_BABY_SEATS_MAX }),
  etc: z.boolean(),
  phoneHolder: z.boolean(),
  specialRequests: z.string().max(500, { message: strings.VALIDATION_SPECIAL_REQUESTS_MAX }).optional(),
}).refine(
  (data) => {
    const pickup = new Date(data.pickupDate + 'T' + data.pickupTime)
    const returnDate = new Date(data.returnDate + 'T' + data.returnTime)
    return returnDate > pickup
  },
  {
    message: strings.VALIDATION_RETURN_DATE_AFTER,
    path: ['returnDate'],
  }
).refine(
  (data) => !data.homeDeliveryPickup || (data.pickupAddress && data.pickupAddress.length > 0),
  {
    message: strings.VALIDATION_PICKUP_ADDRESS_REQUIRED,
    path: ['pickupAddress'],
  }
).refine(
  (data) => !data.homeDeliveryReturn || (data.returnAddress && data.returnAddress.length > 0),
  {
    message: strings.VALIDATION_RETURN_ADDRESS_REQUIRED,
    path: ['returnAddress'],
  }
).refine(
  (data) => {
    // 检查取车时间不能早于当前时间
    const pickup = new Date(data.pickupDate + 'T' + data.pickupTime)
    const now = new Date()
    return pickup > now
  },
  {
    message: strings.VALIDATION_PICKUP_TIME_PAST,
    path: ['pickupDate'],
  }
).refine(
  (data) => {
    // 检查取车时间在营业时间内（8:00-20:00）
    const [hours] = data.pickupTime.split(':').map(Number)
    return hours >= 8 && hours < 20
  },
  {
    message: strings.VALIDATION_PICKUP_TIME_BUSINESS_HOURS,
    path: ['pickupTime'],
  }
).refine(
  (data) => {
    // 检查还车时间在营业时间内（8:00-20:00）
    const [hours] = data.returnTime.split(':').map(Number)
    return hours >= 8 && hours < 20
  },
  {
    message: strings.VALIDATION_RETURN_TIME_BUSINESS_HOURS,
    path: ['returnTime'],
  }
)

// 一般咨询schema
const generalInquirySchema = z.object({
  category: z.nativeEnum(InquiryCategory),
  subject: z.string().min(5, { message: strings.VALIDATION_SUBJECT_MIN }).max(100, { message: strings.VALIDATION_SUBJECT_MAX }),
  message: z.string().min(20, { message: strings.VALIDATION_MESSAGE_MIN }).max(2000, { message: strings.VALIDATION_MESSAGE_MAX }),
})

// 技术支持schema
const technicalSupportSchema = z.object({
  issueType: z.nativeEnum(IssueType),
  orderNumber: z.string().optional(),
  description: z.string().min(20, { message: strings.VALIDATION_DESCRIPTION_MIN }).max(2000, { message: strings.VALIDATION_DESCRIPTION_MAX }),
  urgency: z.enum(['low', 'medium', 'high']),
})

// 企业合作schema
const businessPartnershipSchema = z.object({
  companyName: z.string().min(2, { message: strings.VALIDATION_COMPANY_NAME_MIN }).max(100, { message: strings.VALIDATION_COMPANY_NAME_MAX }),
  partnershipType: z.string().min(2, { message: strings.VALIDATION_PARTNERSHIP_TYPE_MIN }).max(100, { message: strings.VALIDATION_PARTNERSHIP_TYPE_MAX }),
  description: z.string().min(20, { message: strings.VALIDATION_PARTNERSHIP_DESC_MIN }).max(2000, { message: strings.VALIDATION_PARTNERSHIP_DESC_MAX }),
  website: z.string().url({ message: strings.VALIDATION_WEBSITE_INVALID }).optional().or(z.literal('')),
  contactPerson: z.string().min(2, { message: strings.VALIDATION_CONTACT_PERSON_MIN }),
  position: z.string().min(2, { message: strings.VALIDATION_POSITION_MIN }),
})

// 完整表单schema（discriminated union）
export const contactFormSchema = z.discriminatedUnion('contactType', [
  // 车辆预订
  baseContactSchema.extend({
    contactType: z.literal(ContactType.VEHICLE_BOOKING),
    vehicleBooking: vehicleBookingSchema,
  }),

  // 一般咨询
  baseContactSchema.extend({
    contactType: z.literal(ContactType.GENERAL_INQUIRY),
    generalInquiry: generalInquirySchema,
  }),

  // 技术支持
  baseContactSchema.extend({
    contactType: z.literal(ContactType.TECHNICAL_SUPPORT),
    technicalSupport: technicalSupportSchema,
  }),

  // 企业合作
  baseContactSchema.extend({
    contactType: z.literal(ContactType.BUSINESS_PARTNERSHIP),
    businessPartnership: businessPartnershipSchema,
  }),
])

export type ContactFormFields = z.infer<typeof contactFormSchema>

// 导出子schema供单独使用
export {
  baseContactSchema,
  vehicleBookingSchema,
  generalInquirySchema,
  technicalSupportSchema,
  businessPartnershipSchema,
}
