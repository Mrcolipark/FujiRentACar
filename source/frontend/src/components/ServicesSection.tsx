/**
 * LUZURIO Services Section Component
 * 服务特色区：左侧4个特点列表 + 右侧豪车大图
 */

import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/services-section.css'

interface ServiceItem {
  title: string
  description: string
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: strings.SERVICE_PREMIUM_FLEET_TITLE,
      description: strings.SERVICE_PREMIUM_FLEET_DESC,
    },
    {
      title: strings.SERVICE_PROFESSIONAL_TITLE,
      description: strings.SERVICE_PROFESSIONAL_DESC,
    },
    {
      title: strings.SERVICE_FLEXIBLE_TITLE,
      description: strings.SERVICE_FLEXIBLE_DESC,
    },
    {
      title: strings.SERVICE_SUPPORT_TITLE,
      description: strings.SERVICE_SUPPORT_DESC,
    },
  ]

  return (
    <section className="services-section">
      <div className="services-container">

        {/* 左侧：服务特色列表 */}
        <div className="services-content">
          <h2 className="services-title">{strings.SERVICES_SECTION_TITLE}</h2>
          <p className="services-subtitle">{strings.SERVICES_SECTION_SUBTITLE}</p>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">
                  <CheckCircle />
                </div>
                <div className="service-text">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：豪车大图 */}
        <div className="services-image">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=1000&fit=crop"
              alt="Luxury Car"
              className="luxury-car-image"
            />
            <div className="image-overlay">
              <span className="image-badge">{strings.SERVICES_IMAGE_BADGE}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
