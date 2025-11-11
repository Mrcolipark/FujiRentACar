/**
 * BookingStatus Stub - FUJI 项目简化版
 *
 * 策略：保留组件接口，返回空状态
 */

import React from 'react'
import * as bookcarsTypes from ':bookcars-types'

interface BookingStatusProps {
  value: bookcarsTypes.BookingStatus
  className?: string
  showIcon?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const BookingStatus: React.FC<BookingStatusProps> = ({ value, className }) => {
  // FUJI: 无预订系统，返回空
  return null
}

export default BookingStatus
