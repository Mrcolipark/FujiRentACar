/**
 * LUZURIO Stats Section Component
 * 展示4个关键统计数据：34K+客户、99%满意度、210+项目、100%留存率
 */

import React from 'react'
import { strings } from '@/lang/home'
import '@/assets/css/stats-section.css'

interface StatItem {
  value: string
  label: string
  highlight?: boolean
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: '34K+',
      label: strings.STATS_HAPPY_CLIENTS,
      highlight: true,
    },
    {
      value: '99%',
      label: strings.STATS_SATISFACTION,
    },
    {
      value: '210+',
      label: strings.STATS_PROJECTS,
      highlight: true,
    },
    {
      value: '100%',
      label: strings.STATS_RETENTION,
    },
  ]

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className={`stat-value ${stat.highlight ? 'highlight' : ''}`}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
