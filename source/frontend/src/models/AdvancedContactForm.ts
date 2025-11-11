/**
 * 高级联系表单验证模型
 * 使用Zod进行类型安全验证
 */

import { z } from 'zod'
import { ContactType, InquiryCategory, IssueType, InsuranceType, PreferredContactMethod } from '@/types/ContactForm'
import { strings as commonStrings } from '@/lang/common'

// 电话号码验证（国际格式）
const phoneRegex = /^\+?[1-9]\d{1,14}$/

// 基础联系信息schema
const baseContactSchema = z.object({
  contactType: z.nativeEnum(ContactType),
  name: z.string().min(2, '姓名至少需要2个字符'),
  email: z.string().email(commonStrings.EMAIL_NOT_VALID),
  phone: z.string().regex(phoneRegex, '请输入有效的电话号码（包含国家代码）'),
  preferredContactMethod: z.nativeEnum(PreferredContactMethod),
})

// 车辆预订schema
const vehicleBookingSchema = z.object({
  vehicleId: z.string().min(1, '请选择车辆'),
  vehicleName: z.string().min(1, '车辆名称不能为空'),
  pickupDate: z.string().min(1, '请选择取车日期'),
  pickupTime: z.string().min(1, '请选择取车时间'),
  returnDate: z.string().min(1, '请选择还车日期'),
  returnTime: z.string().min(1, '请选择还车时间'),
  pickupLocation: z.string().min(1, '请选择取车地点'),
  homeDeliveryPickup: z.boolean(),
  pickupAddress: z.string().optional(),
  returnLocation: z.string().min(1, '请选择还车地点'),
  homeDeliveryReturn: z.boolean(),
  returnAddress: z.string().optional(),
  sameLocation: z.boolean(),
  passengers: z.number().min(1, '至少需要1位乘客').max(12, '乘客人数不能超过12人'),
  additionalDrivers: z.number().min(0, '额外驾驶员不能为负数').max(5, '额外驾驶员不能超过5人'),
  insurance: z.boolean(),
  babySeats: z.number().min(0, '婴儿座椅数量不能为负数').max(4, '婴儿座椅数量不能超过4个'),
  etc: z.boolean(),
  phoneHolder: z.boolean(),
  specialRequests: z.string().max(500, '特殊要求不能超过500字符').optional(),
}).refine(
  (data) => {
    const pickup = new Date(data.pickupDate + 'T' + data.pickupTime)
    const returnDate = new Date(data.returnDate + 'T' + data.returnTime)
    return returnDate > pickup
  },
  {
    message: '还车时间必须晚于取车时间',
    path: ['returnDate'],
  }
).refine(
  (data) => !data.homeDeliveryPickup || (data.pickupAddress && data.pickupAddress.length > 0),
  {
    message: '请输入取车地址',
    path: ['pickupAddress'],
  }
).refine(
  (data) => !data.homeDeliveryReturn || (data.returnAddress && data.returnAddress.length > 0),
  {
    message: '请输入还车地址',
    path: ['returnAddress'],
  }
)

// 一般咨询schema
const generalInquirySchema = z.object({
  category: z.nativeEnum(InquiryCategory),
  subject: z.string().min(5, '主题至少需要5个字符').max(100, '主题不能超过100字符'),
  message: z.string().min(20, '留言至少需要20个字符').max(2000, '留言不能超过2000字符'),
})

// 技术支持schema
const technicalSupportSchema = z.object({
  issueType: z.nativeEnum(IssueType),
  orderNumber: z.string().optional(),
  description: z.string().min(20, '问题描述至少需要20个字符').max(2000, '问题描述不能超过2000字符'),
  urgency: z.enum(['low', 'medium', 'high']),
})

// 企业合作schema
const businessPartnershipSchema = z.object({
  companyName: z.string().min(2, '公司名称至少需要2个字符').max(100, '公司名称不能超过100字符'),
  partnershipType: z.string().min(2, '合作类型至少需要2个字符').max(100, '合作类型不能超过100字符'),
  description: z.string().min(20, '合作说明至少需要20个字符').max(2000, '合作说明不能超过2000字符'),
  website: z.string().url('请输入有效的网站地址').optional().or(z.literal('')),
  contactPerson: z.string().min(2, '联系人姓名至少需要2个字符'),
  position: z.string().min(2, '职位至少需要2个字符'),
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
