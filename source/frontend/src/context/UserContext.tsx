/**
 * UserContext Stub - FUJI 项目简化版
 *
 * 策略：提供最小化的 Context 实现，避免大量组件改动
 */

import React, { createContext, useContext, ReactNode } from 'react'
import * as bookcarsTypes from ':bookcars-types'

export interface UserContextType {
  user: bookcarsTypes.User | null
  setUser: (user: bookcarsTypes.User | null) => void
  userLoaded: boolean
  setUserLoaded: (loaded: boolean) => void
  unauthorized: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode; refreshKey?: number }) => {
  // FUJI: 始终返回 null（未登录状态）
  const user = null
  const setUser = () => {}
  const userLoaded = true
  const setUserLoaded = () => {}
  const unauthorized = false

  return (
    <UserContext.Provider value={{ user, setUser, userLoaded, setUserLoaded, unauthorized }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider')
  }
  return context
}
