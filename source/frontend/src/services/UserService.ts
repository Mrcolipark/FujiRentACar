/**
 * UserService Stub - FUJI 项目简化版
 *
 * 策略：保留接口定义，返回 mock 数据
 * 原因：很多组件依赖此服务，为了减少改动，提供一个简化版本
 */

import * as bookcarsTypes from ':bookcars-types'

// Mock 用户对象（未登录状态）
const mockUser: bookcarsTypes.User = {
  _id: '',
  email: '',
  fullName: '',
  language: 'ja',
  enableEmailNotifications: false,
  avatar: '',
  verified: false,
  blacklisted: false,
}

/**
 * 获取当前用户（始终返回未登录）
 */
export const getCurrentUser = async (): Promise<bookcarsTypes.User | null> => {
  // FUJI: 无用户系统，返回 null
  return null
}

/**
 * 获取用户信息
 */
export const getUser = async (id: string): Promise<bookcarsTypes.User | null> => {
  return null
}

/**
 * 检查认证状态
 */
export const checkAuthStatus = async (): Promise<number> => {
  // 返回 204 表示未认证
  return 204
}

/**
 * 获取语言
 */
export const getLanguage = (): string => {
  return localStorage.getItem('bc-language') || 'ja'
}

/**
 * 设置语言
 */
export const setLanguage = (lang: string): void => {
  localStorage.setItem('bc-language', lang)
}

/**
 * 更新语言（别名）
 */
export const updateLanguage = async (data: { id?: string; language: string }): Promise<number> => {
  setLanguage(data.language)
  return 200
}

/**
 * 从URL查询参数获取语言
 */
export const getQueryLanguage = (): string | null => {
  const params = new URLSearchParams(window.location.search)
  return params.get('l')
}

/**
 * 获取货币
 */
export const getCurrency = (): string => {
  return localStorage.getItem('bc-currency') || 'JPY'
}

/**
 * 设置货币
 */
export const setCurrency = (currency: string): void => {
  localStorage.setItem('bc-currency', currency)
}

/**
 * 注销（空实现）
 */
export const signout = async (close?: boolean, redirect?: boolean): Promise<void> => {
  // FUJI: 无用户系统，空实现
}

/**
 * 验证访问令牌（始终返回 204）
 */
export const validateAccessToken = async (): Promise<number> => {
  return 204
}

/**
 * 发送邮件（使用 EmailJS 实现）
 */
export const sendEmail = async (data: any): Promise<number> => {
  // TODO: 实现 EmailJS 集成
  console.log('sendEmail called with:', data)
  return 200
}

/**
 * 获取IP地址（stub）
 */
export const getIP = async (): Promise<string> => {
  return '0.0.0.0'
}

/**
 * 验证 reCAPTCHA（stub）
 */
export const verifyRecaptcha = async (token: string, ip?: string): Promise<number> => {
  // FUJI: 如需启用，需要后端API
  return 200
}

/**
 * 重新发送验证链接（stub）
 */
export const resendLink = async (data: { email?: string }): Promise<number> => {
  return 200
}

/**
 * 更新头像（stub）
 */
export const updateAvatar = async (userId: string, file: File | FormData): Promise<number> => {
  return 200
}

/**
 * 删除头像（stub）
 */
export const deleteAvatar = async (userId: string): Promise<number> => {
  return 200
}

/**
 * 更新驾照（stub）
 */
export const updateLicense = async (userId: string, file: File | FormData): Promise<{ status: number; data?: string }> => {
  return { status: 200, data: '' }
}

/**
 * 创建驾照（stub）
 */
export const createLicense = async (file: File | FormData): Promise<string> => {
  return ''
}

/**
 * 删除驾照（stub）
 */
export const deleteLicense = async (userId: string): Promise<number> => {
  return 200
}

/**
 * 删除临时驾照（stub）
 */
export const deleteTempLicense = async (userId: string): Promise<number> => {
  return 200
}

/**
 * 获取保持登录状态（stub）
 */
export const getStayConnected = (): boolean => {
  return false
}

/**
 * 社交登录（stub）
 */
export const socialSignin = async (data: any): Promise<{ status: number; data?: bookcarsTypes.User }> => {
  return { status: 204 }
}

/**
 * 解析JWT（stub）
 */
export const parseJwt = (token: string): any => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

// 导出 mock 用户供测试使用
export const MOCK_USER = mockUser
