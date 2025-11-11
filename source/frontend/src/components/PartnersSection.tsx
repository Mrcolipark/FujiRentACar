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
  // 基于实际车辆清单的合作伙伴品牌（前8个）
  // 使用Clearbit Logo API获取品牌Logo
  const partners: Partner[] = [
    {
      name: 'Mercedes-Benz',
      logo: 'https://logo.clearbit.com/mercedes-benz.com',
    },
    {
      name: 'Maserati',
      logo: 'https://logo.clearbit.com/maserati.com',
    },
    {
      name: 'Toyota',
      logo: 'https://logo.clearbit.com/toyota.com',
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
      name: 'BMW',
      logo: 'https://logo.clearbit.com/bmw.com',
    },
    {
      name: 'Mazda',
      logo: 'https://logo.clearbit.com/mazda.com',
    },
    {
      name: 'Honda',
      logo: 'https://logo.clearbit.com/honda.com',
    },
  ]

  // 复制两次logo数组以实现无缝循环
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">{strings.PARTNERS_TITLE}</h2>

        <div className="partners-grid">
          <div className="partners-scroll-track">
            {duplicatedPartners.map((partner, index) => (
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
      </div>
    </section>
  )
}

export default PartnersSection
