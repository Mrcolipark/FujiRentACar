/**
 * LUZURIO Booking Form Section Component
 * 横向预订表单区：一行显示所有预订选项
 */

import React, { useState } from 'react'
import { Button, TextField, MenuItem } from '@mui/material'
import { ArrowForward, CalendarToday, LocationOn } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/booking-form-section.css'

const BookingFormSection: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')

  // 示例地点数据（您可以替换为真实数据）
  const locations = [
    { id: '1', name: strings.LOCATION_TOKYO },
    { id: '2', name: strings.LOCATION_OSAKA },
    { id: '3', name: strings.LOCATION_KYOTO },
    { id: '4', name: strings.LOCATION_NARITA },
  ]

  const handleSearch = () => {
    // 预订搜索逻辑（占位符）
    console.log('Search:', { pickupLocation, dropoffLocation, pickupDate, dropoffDate })
  }

  return (
    <section className="booking-form-section">
      <div className="booking-form-container">

        {/* 标题 */}
        <div className="booking-form-header">
          <h2 className="booking-form-title">{strings.BOOKING_FORM_TITLE}</h2>
          <p className="booking-form-subtitle">{strings.BOOKING_FORM_SUBTITLE}</p>
        </div>

        {/* 表单 */}
        <div className="booking-form">

          {/* 取车地点 */}
          <div className="form-field">
            <div className="field-label">
              <LocationOn className="field-icon" />
              <span>{strings.PICKUP_LOCATION}</span>
            </div>
            <TextField
              select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder={strings.SELECT_LOCATION}
              variant="outlined"
              fullWidth
              className="booking-input"
            >
              {locations.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* 取车日期 */}
          <div className="form-field">
            <div className="field-label">
              <CalendarToday className="field-icon" />
              <span>{strings.PICKUP_DATE}</span>
            </div>
            <TextField
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              variant="outlined"
              fullWidth
              className="booking-input"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          {/* 还车地点 */}
          <div className="form-field">
            <div className="field-label">
              <LocationOn className="field-icon" />
              <span>{strings.DROPOFF_LOCATION}</span>
            </div>
            <TextField
              select
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              placeholder={strings.SELECT_LOCATION}
              variant="outlined"
              fullWidth
              className="booking-input"
            >
              {locations.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* 还车日期 */}
          <div className="form-field">
            <div className="field-label">
              <CalendarToday className="field-icon" />
              <span>{strings.DROPOFF_DATE}</span>
            </div>
            <TextField
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              variant="outlined"
              fullWidth
              className="booking-input"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          {/* 搜索按钮 */}
          <div className="form-field form-action">
            <Button
              variant="contained"
              className="booking-submit-btn"
              endIcon={<ArrowForward />}
              onClick={handleSearch}
            >
              {strings.SEARCH_VEHICLES}
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default BookingFormSection
