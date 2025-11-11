/**
 * LUZURIO CTA Section Component
 * 底部行动号召区：对称跑车+中心大标题
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/cta-section.css'

const CtaSection: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* 左侧跑车图片 */}
        <div className="cta-car cta-car-left">
          <img
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80"
            alt="Luxury Sports Car"
            className="cta-car-image"
          />
        </div>

        {/* 中心内容 */}
        <div className="cta-content">
          <h2 className="cta-title">{strings.CTA_TITLE}</h2>
          <p className="cta-subtitle">{strings.CTA_SUBTITLE}</p>
          <Button
            variant="contained"
            className="cta-button"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/search')}
          >
            {strings.CTA_BUTTON}
          </Button>
        </div>

        {/* 右侧跑车图片 */}
        <div className="cta-car cta-car-right">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80"
            alt="Luxury Sports Car"
            className="cta-car-image"
          />
        </div>

      </div>
    </section>
  )
}

export default CtaSection
