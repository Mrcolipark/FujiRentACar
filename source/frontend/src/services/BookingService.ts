/**
 * BookingService Stub - FUJI 项目简化版
 *
 * 策略：保留接口定义，返回空数据
 */

import * as bookcarsTypes from ':bookcars-types'

/**
 * 获取预订列表（stub）
 */
export const getBookings = async (payload: any, page: number, pageSize: number): Promise<any> => {
  return {
    resultData: [],
    pageInfo: { totalRecords: 0 }
  }
}

/**
 * 获取单个预订（stub）
 */
export const getBooking = async (id: string): Promise<bookcarsTypes.Booking | null> => {
  return null
}

/**
 * 删除预订（stub）
 */
export const deleteBooking = async (id: string): Promise<number> => {
  return 200
}

/**
 * 取消预订（stub）
 */
export const cancel = async (id: string): Promise<number> => {
  return 200
}
