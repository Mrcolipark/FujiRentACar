/**
 * LUZURIO Partners Section Component
 * 合作伙伴Logo展示区：横向滚动的品牌Logo列表
 */

import React from 'react'
import { strings } from '@/lang/home'
import '@/assets/css/partners-section.css'

interface Partner {
  name: string
  logo: string
}

const PartnersSection: React.FC = () => {
  // 使用占位符Logo（您后期可以替换成真实的合作伙伴Logo）
  const partners: Partner[] = [
    {
      name: 'Mercedes-Benz',
      logo: 'https://logo.clearbit.com/mercedes-benz.com',
    },
    {
      name: 'BMW',
      logo: 'https://logo.clearbit.com/bmw.com',
    },
    {
      name: 'Audi',
      logo: 'https://logo.clearbit.com/audi.com',
    },
    {
      name: 'Porsche',
      logo: 'https://logo.clearbit.com/porsche.com',
    },
    {
      name: 'Lexus',
      logo: 'https://logo.clearbit.com/lexus.com',
    },
    {
      name: 'Tesla',
      logo: 'https://logo.clearbit.com/tesla.com',
    },
    {
      name: 'Range Rover',
      logo: 'https://logo.clearbit.com/landrover.com',
    },
    {
      name: 'Bentley',
      logo: 'https://logo.clearbit.com/bentleymotors.com',
    },
  ]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">{strings.PARTNERS_TITLE}</h2>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
                onError={(e) => {
                  // 如果Logo加载失败，显示品牌名称
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="partner-fallback">${partner.name}</span>`
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
