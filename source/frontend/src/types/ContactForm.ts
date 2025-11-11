/**
 * 商用级联系表单类型定义
 * 支持多种联系类型的智能表单
 */

// 联系类型枚举
export enum ContactType {
  VEHICLE_BOOKING = 'vehicle_booking',
  GENERAL_INQUIRY = 'general_inquiry',
  TECHNICAL_SUPPORT = 'technical_support',
  BUSINESS_PARTNERSHIP = 'business_partnership'
}

// 咨询类别枚举
export enum InquiryCategory {
  PRICING = 'pricing',
  VEHICLE_INFO = 'vehicle_info',
  POLICY = 'policy',
  INSURANCE = 'insurance',
  OTHER = 'other'
}

// 问题类型枚举
export enum IssueType {
  BOOKING_ISSUE = 'booking_issue',
  WEBSITE_ISSUE = 'website_issue',
  PAYMENT_ISSUE = 'payment_issue',
  COMPLAINT = 'complaint',
  OTHER = 'other'
}

// 保险类型枚举
export enum InsuranceType {
  BASIC = 'basic',
  CDW = 'cdw',
  FULL = 'full'
}

// 首选联系方式枚举
export enum PreferredContactMethod {
  EMAIL = 'email',
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
  LINE = 'line'
}

// 车辆预订表单数据
export interface VehicleBookingData {
  vehicleId: string
  vehicleName: string
  pickupDate: string // ISO date string
  pickupTime: string
  returnDate: string // ISO date string
  returnTime: string
  pickupLocation: string
  homeDeliveryPickup: boolean // 上门取车
  pickupAddress?: string // 取车地址（如果选择上门）
  returnLocation: string
  homeDeliveryReturn: boolean // 上门还车
  returnAddress?: string // 还车地址（如果选择上门）
  sameLocation: boolean
  passengers: number
  additionalDrivers: number
  insurance: boolean // 简化为是否需要保险
  babySeats: number
  etc: boolean
  phoneHolder: boolean
  specialRequests?: string
}

// 一般咨询表单数据
export interface GeneralInquiryData {
  category: InquiryCategory
  subject: string
  message: string
}

// 技术支持表单数据
export interface TechnicalSupportData {
  issueType: IssueType
  orderNumber?: string
  description: string
  urgency: 'low' | 'medium' | 'high'
}

// 企业合作表单数据
export interface BusinessPartnershipData {
  companyName: string
  partnershipType: string
  description: string
  website?: string
  contactPerson: string
  position: string
}

// 完整联系表单数据
export interface ContactFormData {
  // 基础信息
  contactType: ContactType
  name: string
  email: string
  phone: string
  preferredContactMethod: PreferredContactMethod

  // 条件字段（根据contactType）
  vehicleBooking?: VehicleBookingData
  generalInquiry?: GeneralInquiryData
  technicalSupport?: TechnicalSupportData
  businessPartnership?: BusinessPartnershipData
}

// EmailJS模板参数
export interface EmailTemplateParams {
  // 通用字段
  to_email: string
  contact_type: string
  name: string
  email: string
  phone: string
  preferred_contact: string

  // 车辆预订字段
  vehicle_name?: string
  pickup_date?: string
  pickup_time?: string
  pickup_location?: string
  return_date?: string
  return_time?: string
  return_location?: string
  passengers?: number
  additional_drivers?: number
  insurance_type?: string
  child_seats?: number
  gps?: string
  wifi?: string
  special_requests?: string
  estimated_cost?: string

  // 一般咨询字段
  inquiry_category?: string
  subject?: string
  message?: string

  // 技术支持字段
  issue_type?: string
  order_number?: string
  description?: string
  urgency?: string

  // 企业合作字段
  company_name?: string
  partnership_type?: string
  business_description?: string
  website?: string
  contact_person?: string
  position?: string
}

// 表单步骤
export interface FormStep {
  id: number
  title: string
  description: string
  isComplete: boolean
}

// 价格计算结果
export interface PriceSummary {
  rentalCost: number
  insuranceCost: number
  additionalDriverCost: number
  childSeatCost: number
  gpsCost: number
  wifiCost: number
  total: number
  currency: string
}
