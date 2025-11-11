/**
 * LUZURIO Quality Assurance Section Component
 * 品质保证区：左侧车内照 + 右侧文案
 */

import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/quality-section.css'

const QualitySection: React.FC = () => {
  const features = [
    strings.QUALITY_FEATURE_1,
    strings.QUALITY_FEATURE_2,
    strings.QUALITY_FEATURE_3,
    strings.QUALITY_FEATURE_4,
  ]

  return (
    <section className="quality-section">
      <div className="quality-container">

        {/* 左侧：车内照片 */}
        <div className="quality-image">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=1000&fit=crop"
              alt="Luxury Car Interior"
              className="interior-image"
            />
            <div className="image-badge">
              {strings.QUALITY_BADGE}
            </div>
          </div>
        </div>

        {/* 右侧：文案内容 */}
        <div className="quality-content">
          <h2 className="quality-title">{strings.QUALITY_TITLE}</h2>
          <p className="quality-subtitle">{strings.QUALITY_SUBTITLE}</p>

          <div className="quality-features">
            {features.map((feature, index) => (
              <div key={index} className="quality-feature-item">
                <CheckCircle className="feature-icon" />
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <p className="quality-description">
            {strings.QUALITY_DESCRIPTION}
          </p>
        </div>

      </div>
    </section>
  )
}

export default QualitySection
