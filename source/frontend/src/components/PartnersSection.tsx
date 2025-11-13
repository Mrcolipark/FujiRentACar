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
  // 使用Google Favicon API获取品牌Logo（128x128 高质量）
  const partners: Partner[] = [
    {
      name: 'Mercedes-Benz',
      logo: 'https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=128',
    },
    {
      name: 'Maserati',
      logo: 'https://www.google.com/s2/favicons?domain=maserati.com&sz=128',
    },
    {
      name: 'Toyota',
      logo: 'https://www.google.com/s2/favicons?domain=toyota.com&sz=128',
    },
    {
      name: 'Porsche',
      logo: 'https://www.google.com/s2/favicons?domain=porsche.com&sz=128',
    },
    {
      name: 'Lexus',
      logo: 'https://www.google.com/s2/favicons?domain=lexus.com&sz=128',
    },
    {
      name: 'BMW',
      logo: 'https://www.google.com/s2/favicons?domain=bmw.com&sz=128',
    },
    {
      name: 'Mazda',
      logo: 'https://www.google.com/s2/favicons?domain=mazda.com&sz=128',
    },
    {
      name: 'Honda',
      logo: 'https://www.google.com/s2/favicons?domain=honda.com&sz=128',
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
