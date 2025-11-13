/**
 * LUZURIO Vehicle Grid Section Component
 * 车辆网格展示区：2x3大卡片，带SUPERIOR标签
 * 从实际车辆清单中选择最高级的6辆车展示（支持多语言）
 */

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { strings } from '@/lang/home'
import * as UserService from '@/services/UserService'
import '@/assets/css/vehicle-grid-section.css'

interface MultiLangText {
  ja: string
  zh: string
  en: string
}

interface Vehicle {
  id: string
  name: MultiLangText
  brand: string
  model: MultiLangText
  category: MultiLangText
  image: string
  isSuperior: boolean
  seats: number
  price: number
  transmission: string
}

const VehicleGridSection: React.FC = () => {
  const navigate = useNavigate()
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const language = UserService.getLanguage()

  useEffect(() => {
    // 从JSON文件加载车辆数据
    fetch('/data/vehicles.json')
      .then(response => response.json())
      .then((data: Vehicle[]) => {
        // 按价格排序，取前6辆
        const topVehicles = data
          .filter(v => v.price && typeof v.price === 'number')
          .sort((a, b) => b.price - a.price)
          .slice(0, 6)
        setVehicles(topVehicles)
      })
      .catch(error => {
        console.error('加载车辆数据失败:', error)
      })
  }, [])

  // 根据当前语言获取文本
  const getText = (text: MultiLangText | string): string => {
    if (typeof text === 'string') return text
    return text[language as keyof MultiLangText] || text.en
  }

  const handleViewDetails = (vehicleId: string) => {
    navigate(`/vehicles/${vehicleId}`)
  }

  const handleViewAllVehicles = () => {
    navigate('/vehicles')
  }

  return (
    <section className="vehicle-grid-section">
      <div className="vehicle-grid-container">

        {/* 标题区域 */}
        <div className="vehicle-grid-header">
          <h2 className="vehicle-grid-title">{strings.VEHICLES_TITLE}</h2>
          <p className="vehicle-grid-subtitle">{strings.VEHICLES_SUBTITLE}</p>
        </div>

        {/* 车辆网格 */}
        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">

              {/* 车辆图片 */}
              <div className="vehicle-image-wrapper">
                <img
                  src={vehicle.image}
                  alt={getText(vehicle.name)}
                  className="vehicle-image"
                />

                {/* 悬停遮罩 */}
                <div className="vehicle-overlay">
                  <Button
                    variant="contained"
                    className="view-details-btn"
                    endIcon={<ArrowForward />}
                    onClick={() => handleViewDetails(vehicle.id)}
                  >
                    {strings.VIEW_DETAILS}
                  </Button>
                </div>
              </div>

              {/* 车辆信息 */}
              <div className="vehicle-info">
                <div className="vehicle-category">{getText(vehicle.category)}</div>
                <h3 className="vehicle-name">{getText(vehicle.name)}</h3>
                <div className="vehicle-specs">
                  <span className="vehicle-spec">
                    {vehicle.seats} {strings.PASSENGERS}
                  </span>
                  <span className="vehicle-spec-divider">•</span>
                  <span className="vehicle-spec">{vehicle.transmission}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 查看全部按钮 */}
        <div className="vehicle-grid-footer">
          <Button
            variant="outlined"
            className="view-all-btn"
            endIcon={<ArrowForward />}
            onClick={handleViewAllVehicles}
          >
            {strings.VIEW_ALL_VEHICLES}
          </Button>
        </div>

      </div>
    </section>
  )
}

export default VehicleGridSection
