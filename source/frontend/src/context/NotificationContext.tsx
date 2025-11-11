/**
 * NotificationContext Stub - FUJI 项目简化版
 *
 * 策略：提供最小化的 Context 实现，返回空通知列表
 */

import React, { createContext, useContext, ReactNode } from 'react'

export interface NotificationContextType {
  notificationCount: number
  setNotificationCount: (count: number) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: ReactNode; refreshKey?: number }) => {
  // FUJI: 无通知系统
  const notificationCount = 0
  const setNotificationCount = () => {}

  return (
    <NotificationContext.Provider value={{ notificationCount, setNotificationCount }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotificationContext must be used within NotificationProvider')
  }
  return context
}
