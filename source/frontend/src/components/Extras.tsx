/**
 * Extras Stub - FUJI 项目简化版
 *
 * 策略：保留组件接口，返回空
 */

import React from 'react'
import * as bookcarsTypes from ':bookcars-types'

interface ExtrasProps {
  booking: bookcarsTypes.Booking
  className?: string
  days?: number
}

const Extras: React.FC<ExtrasProps> = ({ booking, className }) => {
  // FUJI: 无预订系统，返回空
  return null
}

export default Extras
