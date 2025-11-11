/**
 * LUZURIO Reputation Section Component
 * 品牌声誉区：5星评价 + Trustpilot评分 + 权威认证
 */

import React from 'react'
import { Star } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/reputation-section.css'

const ReputationSection: React.FC = () => {
  return (
    <section className="reputation-section">
      <div className="reputation-container">

        {/* 左侧：评分展示 */}
        <div className="reputation-rating">
          <div className="rating-badge">
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="star-icon" />
              ))}
            </div>
            <div className="rating-score">5.0</div>
            <div className="rating-source">Trustpilot</div>
          </div>

          <div className="rating-text">
            <div className="rating-title">{strings.REPUTATION_TITLE}</div>
            <div className="rating-subtitle">{strings.REPUTATION_SUBTITLE}</div>
          </div>
        </div>

        {/* 右侧：数据展示 */}
        <div className="reputation-stats">
          <div className="reputation-stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">{strings.REPUTATION_GOOGLE_RATING}</div>
          </div>

          <div className="reputation-stat-item">
            <div className="stat-number">2,450+</div>
            <div className="stat-label">{strings.REPUTATION_REVIEWS}</div>
          </div>

          <div className="reputation-stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">{strings.REPUTATION_RECOMMEND}</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ReputationSection
