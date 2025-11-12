/**
 * EmailJS服务
 * 处理所有邮件发送功能
 */

import emailjs from '@emailjs/browser'
import env from '@/config/env.config'
import { ContactFormData, ContactType, EmailTemplateParams } from '@/types/ContactForm'
import * as helper from '@/utils/helper'

// EmailJS配置检查
const isEmailJSConfigured = (): boolean => {
  return !!(
    env.EMAILJS_ENABLED &&
    env.EMAILJS_SERVICE_ID &&
    env.EMAILJS_PUBLIC_KEY
  )
}

// 根据联系类型获取模板ID
const getTemplateId = (contactType: ContactType): string => {
  const templates = {
    [ContactType.VEHICLE_BOOKING]: env.EMAILJS_TEMPLATE_ID || 'template_booking',
    [ContactType.GENERAL_INQUIRY]: env.EMAILJS_TEMPLATE_ID || 'template_inquiry',
    [ContactType.TECHNICAL_SUPPORT]: env.EMAILJS_TEMPLATE_ID || 'template_support',
    [ContactType.BUSINESS_PARTNERSHIP]: env.EMAILJS_TEMPLATE_ID || 'template_business',
  }

  return templates[contactType]
}

// 格式化模板参数
const formatTemplateParams = (data: ContactFormData): EmailTemplateParams => {
  const baseParams: EmailTemplateParams = {
    to_email: env.CONTACT_EMAIL || 'rentacarfuji@gmail.com',
    contact_type: helper.capitalizeFirstLetter(data.contactType.replace('_', ' ')),
    name: data.name,
    email: data.email,
    phone: data.phone,
    preferred_contact: helper.capitalizeFirstLetter(data.preferredContactMethod),
  }

  // 根据联系类型添加特定字段
  switch (data.contactType) {
    case ContactType.VEHICLE_BOOKING:
      if (data.vehicleBooking) {
        const vb = data.vehicleBooking
        return {
          ...baseParams,
          vehicle_name: vb.vehicleName,
          pickup_date: helper.formatDate(vb.pickupDate),
          pickup_time: vb.pickupTime,
          pickup_location: vb.homeDeliveryPickup ? `Home Delivery: ${vb.pickupAddress}` : vb.pickupLocation,
          home_delivery_pickup: vb.homeDeliveryPickup ? 'Yes' : 'No',
          return_date: helper.formatDate(vb.returnDate),
          return_time: vb.returnTime,
          return_location: vb.homeDeliveryReturn ? `Home Pickup: ${vb.returnAddress}` : vb.returnLocation,
          home_delivery_return: vb.homeDeliveryReturn ? 'Yes' : 'No',
          passengers: vb.passengers,
          additional_drivers: vb.additionalDrivers,
          insurance_required: vb.insurance ? 'Yes' : 'No',
          baby_seats: vb.babySeats,
          etc_card: vb.etc ? 'Yes' : 'No',
          phone_holder: vb.phoneHolder ? 'Yes' : 'No',
          special_requests: vb.specialRequests || 'None',
        }
      }
      break

    case ContactType.GENERAL_INQUIRY:
      if (data.generalInquiry) {
        const gi = data.generalInquiry
        return {
          ...baseParams,
          inquiry_category: helper.capitalizeFirstLetter(gi.category.replace('_', ' ')),
          subject: gi.subject,
          message: gi.message,
        }
      }
      break

    case ContactType.TECHNICAL_SUPPORT:
      if (data.technicalSupport) {
        const ts = data.technicalSupport
        return {
          ...baseParams,
          issue_type: helper.capitalizeFirstLetter(ts.issueType.replace('_', ' ')),
          order_number: ts.orderNumber || 'N/A',
          description: ts.description,
          urgency: ts.urgency.toUpperCase(),
        }
      }
      break

    case ContactType.BUSINESS_PARTNERSHIP:
      if (data.businessPartnership) {
        const bp = data.businessPartnership
        return {
          ...baseParams,
          company_name: bp.companyName,
          partnership_type: bp.partnershipType,
          business_description: bp.description,
          website: bp.website || 'N/A',
          contact_person: bp.contactPerson,
          position: bp.position,
        }
      }
      break
  }

  return baseParams
}

// 发送联系表单邮件
export const sendContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean; message?: string; messageId?: string }> => {
  // 检查EmailJS配置
  if (!isEmailJSConfigured()) {
    console.warn('EmailJS未配置，邮件发送功能不可用')
    // 开发环境下返回成功，方便测试
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 [DEV MODE] 邮件数据:', data)
      return { success: true, message: '开发模式：邮件已模拟发送' }
    }
    return { success: false, message: 'Email service is not configured' }
  }

  try {
    // 格式化模板参数
    const templateParams = formatTemplateParams(data)

    // 获取模板ID
    const templateId = getTemplateId(data.contactType)

    console.log('📧 发送邮件:', {
      serviceId: env.EMAILJS_SERVICE_ID,
      templateId,
      params: templateParams,
    })

    // 发送邮件
    const response = await emailjs.send(
      env.EMAILJS_SERVICE_ID!,
      templateId,
      templateParams,
      env.EMAILJS_PUBLIC_KEY
    )

    console.log('✅ 邮件发送成功:', response)

    // 发送确认邮件给客户
    await sendConfirmationEmail(data.email, data.contactType, data.name)

    return {
      success: true,
      messageId: response.text,
      message: '邮件已成功发送',
    }
  } catch (error: any) {
    console.error('❌ 邮件发送失败:', error)
    return {
      success: false,
      message: error.text || error.message || 'Failed to send email',
    }
  }
}

// 发送确认邮件给客户
const sendConfirmationEmail = async (
  customerEmail: string,
  contactType: ContactType,
  customerName: string
): Promise<void> => {
  try {
    // TODO: 创建客户确认邮件模板
    const confirmationParams = {
      to_email: customerEmail,
      customer_name: customerName,
      company_name: 'FUJI RENT A CAR',
      contact_type: helper.capitalizeFirstLetter(contactType.replace('_', ' ')),
      response_time: '24小时内',
      support_email: env.CONTACT_EMAIL,
      whatsapp: env.WHATSAPP_NUMBER,
      line_id: env.LINE_ID,
    }

    // 使用单独的确认邮件模板
    // const confirmationTemplateId = `confirmation_${contactType}`

    // await emailjs.send(
    //   env.EMAILJS_SERVICE_ID!,
    //   confirmationTemplateId,
    //   confirmationParams,
    //   env.EMAILJS_PUBLIC_KEY
    // )

    console.log('✅ 确认邮件已发送给客户:', customerEmail)
  } catch (error) {
    // 确认邮件失败不影响主流程
    console.warn('⚠️ 确认邮件发送失败（不影响主流程）:', error)
  }
}

// 计算价格估算（用于车辆预订邮件）
export const calculateEstimatedCost = (
  dailyPrice: number,
  days: number,
  insurance: string,
  additionalDrivers: number,
  childSeats: number,
  gps: boolean,
  wifi: boolean
): number => {
  let total = dailyPrice * days

  // 保险费用
  const insuranceCosts = {
    basic: 0,
    cdw: 2000 * days,
    full: 5000 * days,
  }
  total += insuranceCosts[insurance as keyof typeof insuranceCosts] || 0

  // 额外驾驶员
  total += additionalDrivers * 1500 * days

  // 儿童座椅
  total += childSeats * 500 * days

  // GPS
  if (gps) total += 300 * days

  // WiFi
  if (wifi) total += 500 * days

  return total
}

// 发送Newsletter订阅邮件
export const sendNewsletterSubscription = async (
  email: string
): Promise<{ success: boolean; message?: string }> => {
  // 检查EmailJS配置
  if (!isEmailJSConfigured()) {
    console.warn('EmailJS未配置，Newsletter订阅功能不可用')
    // 开发环境下返回成功，方便测试
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 [DEV MODE] Newsletter订阅:', email)
      return { success: true, message: '开发模式：订阅已模拟发送' }
    }
    return { success: false, message: 'Email service is not configured' }
  }

  try {
    // Newsletter订阅模板参数
    const templateParams = {
      to_email: env.CONTACT_EMAIL || 'rentacarfuji@gmail.com',
      subscriber_email: email,
      subscribe_date: new Date().toLocaleDateString('ja-JP'),
      subscribe_time: new Date().toLocaleTimeString('ja-JP'),
    }

    // 使用Newsletter专用模板ID，如果没有配置则使用通用模板
    const newsletterTemplateId = env.EMAILJS_NEWSLETTER_TEMPLATE_ID || env.EMAILJS_TEMPLATE_ID

    console.log('📧 发送Newsletter订阅邮件:', {
      serviceId: env.EMAILJS_SERVICE_ID,
      templateId: newsletterTemplateId,
      params: templateParams,
    })

    // 发送邮件
    const response = await emailjs.send(
      env.EMAILJS_SERVICE_ID!,
      newsletterTemplateId!,
      templateParams,
      env.EMAILJS_PUBLIC_KEY
    )

    console.log('✅ Newsletter订阅邮件发送成功:', response)

    return {
      success: true,
      message: 'Newsletter subscription email sent successfully',
    }
  } catch (error: any) {
    console.error('❌ Newsletter订阅邮件发送失败:', error)
    return {
      success: false,
      message: error.text || error.message || 'Failed to send newsletter subscription email',
    }
  }
}

export default {
  sendContactForm,
  sendNewsletterSubscription,
  calculateEstimatedCost,
}
