/**
 * NotificationService Stub - FUJI 项目简化版
 *
 * 策略：保留接口定义，返回空数据
 */

import * as bookcarsTypes from ':bookcars-types'

/**
 * 获取通知列表（stub）
 */
export const getNotifications = async (userId: string, page: number, pageSize?: number): Promise<any[]> => {
  return [{
    resultData: [],
    pageInfo: { totalRecord: 0 }
  }]
}

/**
 * 标记通知为已读（stub）
 */
export const markAsRead = async (userId: string, ids: string[]): Promise<number> => {
  return 200
}

/**
 * 标记通知为未读（stub）
 */
export const markAsUnread = async (userId: string, ids: string[]): Promise<number> => {
  return 200
}

/**
 * 删除通知（stub）
 */
export const deleteNotifications = async (userId: string, ids: string[]): Promise<number> => {
  return 200
}

/**
 * 获取未读通知数量（stub）
 */
export const getNotificationCounter = async (userId: string): Promise<number> => {
  return 0
}
