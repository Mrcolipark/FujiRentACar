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
  // 基于实际车辆清单的所有合作伙伴品牌（10个）
  // 使用本地存储的品牌Logo（128x128 高质量）
  const partners: Partner[] = [
    {
      name: 'Mercedes-Benz',
      logo: '/images/brands/mercedes-benz.png',
    },
    {
      name: 'Maserati',
      logo: '/images/brands/maserati.png',
    },
    {
      name: 'Toyota',
      logo: '/images/brands/toyota.png',
    },
    {
      name: 'Porsche',
      logo: '/images/brands/porsche.png',
    },
    {
      name: 'Lexus',
      logo: '/images/brands/lexus.png',
    },
    {
      name: 'BMW',
      logo: '/images/brands/bmw.png',
    },
    {
      name: 'Mazda',
      logo: '/images/brands/mazda.png',
    },
    {
      name: 'Honda',
      logo: '/images/brands/honda.png',
    },
    {
      name: 'Nissan',
      logo: '/images/brands/nissan.png',
    },
    {
      name: 'Subaru',
      logo: '/images/brands/subaru.png',
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
