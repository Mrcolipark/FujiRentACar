/**
 * LUZURIO Reviews Section Component
 * 客户评价区：3列布局的5星评价卡片
 */

import React from 'react'
import { Star } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/reviews-section.css'

interface Review {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  review: string
  date: string
}

const ReviewsSection: React.FC = () => {
  // 6条示例评价（占位符数据）
  const reviews: Review[] = [
    {
      id: '1',
      name: '山田太郎',
      role: 'CEO, Tokyo Industries',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      review: strings.REVIEW_1,
      date: '2024-03',
    },
    {
      id: '2',
      name: 'John Smith',
      role: 'Business Executive',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      review: strings.REVIEW_2,
      date: '2024-03',
    },
    {
      id: '3',
      name: '李明',
      role: 'Entrepreneur',
      avatar: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      review: strings.REVIEW_3,
      date: '2024-02',
    },
    {
      id: '4',
      name: '佐藤花子',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      review: strings.REVIEW_4,
      date: '2024-02',
    },
    {
      id: '5',
      name: 'Michael Chen',
      role: 'Consultant',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      review: strings.REVIEW_5,
      date: '2024-01',
    },
    {
      id: '6',
      name: '田中美咲',
      role: 'Marketing Director',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      review: strings.REVIEW_6,
      date: '2024-01',
    },
  ]

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* 标题区域 */}
        <div className="reviews-header">
          <h2 className="reviews-title">{strings.REVIEWS_TITLE}</h2>
          <p className="reviews-subtitle">{strings.REVIEWS_SUBTITLE}</p>
        </div>

        {/* 评价网格 */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">

              {/* 评分星星 */}
              <div className="review-rating">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="star-icon" />
                ))}
              </div>

              {/* 评价内容 */}
              <p className="review-text">{review.review}</p>

              {/* 客户信息 */}
              <div className="review-author">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">{review.name}</div>
                  <div className="author-role">{review.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ReviewsSection
