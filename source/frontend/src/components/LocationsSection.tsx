/**
 * FUJI RENT A CAR - Locations Section Component
 * 营业所展示区：左右分栏高级设计，左侧大地图 + 右侧信息面板
 */

import React, { useState } from 'react'
import { Button, Tabs, Tab } from '@mui/material'
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Print as FaxIcon,
  Email as EmailIcon,
  OpenInNew as OpenIcon,
  Business as BusinessIcon
} from '@mui/icons-material'
import { strings } from '@/lang/locations-section'
import '@/assets/css/locations-section.css'

interface Location {
  id: string
  name: string
  address: string
  mapUrl: string
  embedUrl: string
  latitude: number
  longitude: number
}

const LocationsSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(0)

  const locations: Location[] = [
    {
      id: 'main',
      name: strings.MAIN_OFFICE,
      address: '〒130-0014 東京都 墨田区 亀沢４丁目-２３-6',
      mapUrl: 'https://maps.app.goo.gl/MsntSiHKXXkD9pHFA',
      latitude: 35.6990451,
      longitude: 139.8061118,
      embedUrl: 'https://www.google.com/maps?q=35.6990451,139.8061118&output=embed&z=17'
    },
    {
      id: 'narita',
      name: strings.NARITA_OFFICE,
      address: '〒286-0106 千葉県成田市取香564-1',
      mapUrl: 'https://maps.app.goo.gl/Go3MMFhRsDsuPEug9',
      latitude: 35.764,
      longitude: 140.386,
      embedUrl: 'https://www.google.com/maps?q=35.764,140.386&output=embed&z=16'
    }
  ]

  const contactInfo = {
    company: strings.COMPANY_NAME,
    brand: strings.BRAND_NAME,
    phone: '04-7676-9965',
    fax: '04-7633-4020',
    email: 'rentacarfuji@gmail.com'
  }

  const currentLocation = locations[activeLocation]

  return (
    <section className="locations-section">
      <div className="locations-container">

        {/* Section Header */}
        <div className="locations-header">
          <h2 className="locations-title">{strings.SECTION_TITLE}</h2>
          <p className="locations-subtitle">{strings.SECTION_SUBTITLE}</p>
        </div>

        {/* Left-Right Split Layout */}
        <div className="locations-split-layout">

          {/* LEFT: Large Map Display */}
          <div className="locations-map-panel">
            <div className="map-wrapper">
              <iframe
                src={currentLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={currentLocation.name}
              />
            </div>
          </div>

          {/* RIGHT: Info Panel */}
          <div className="locations-info-panel">

            {/* Location Tabs */}
            <Tabs
              value={activeLocation}
              onChange={(_, newValue) => setActiveLocation(newValue)}
              className="location-tabs"
              variant="fullWidth"
              TabIndicatorProps={{
                style: { backgroundColor: 'var(--fuji-red-primary)' }
              }}
            >
              {locations.map((location, index) => (
                <Tab
                  key={location.id}
                  label={location.name}
                  className="location-tab"
                  icon={<LocationIcon />}
                  iconPosition="start"
                />
              ))}
            </Tabs>

            {/* Current Location Details */}
            <div className="location-details">
              <div className="detail-item">
                <span className="detail-label">{strings.ADDRESS}</span>
                <span className="detail-value">{currentLocation.address}</span>
              </div>

              <Button
                variant="outlined"
                className="maps-button"
                href={currentLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenIcon />}
                fullWidth
              >
                {strings.OPEN_IN_MAPS}
              </Button>
            </div>

            {/* Divider */}
            <div className="info-divider"></div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-header">
                <BusinessIcon className="company-icon" />
                <div>
                  <h3 className="company-name">{contactInfo.company}</h3>
                  <p className="brand-name">{contactInfo.brand}</p>
                </div>
              </div>

              <div className="contact-list">
                <div className="contact-item">
                  <PhoneIcon className="contact-icon" />
                  <div className="contact-content">
                    <span className="contact-label">{strings.PHONE}</span>
                    <a href={`tel:${contactInfo.phone}`} className="contact-value">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <FaxIcon className="contact-icon" />
                  <div className="contact-content">
                    <span className="contact-label">{strings.FAX}</span>
                    <span className="contact-value">{contactInfo.fax}</span>
                  </div>
                </div>

                <div className="contact-item">
                  <EmailIcon className="contact-icon" />
                  <div className="contact-content">
                    <span className="contact-label">{strings.EMAIL}</span>
                    <a href={`mailto:${contactInfo.email}`} className="contact-value">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default LocationsSection
