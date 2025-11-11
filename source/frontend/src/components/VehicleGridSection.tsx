/**
 * LUZURIO Vehicle Grid Section Component
 * 车辆网格展示区：2x3大卡片，带SUPERIOR标签
 */

import React from 'react'
import { Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/vehicle-grid-section.css'

interface Vehicle {
  id: string
  name: string
  category: string
  image: string
  isSuperior: boolean
  passengers: number
  transmission: string
}

const VehicleGridSection: React.FC = () => {
  // 6辆展示车辆（占位符数据）
  const vehicles: Vehicle[] = [
    {
      id: '1',
      name: 'Mercedes-Benz S-Class',
      category: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      isSuperior: true,
      passengers: 5,
      transmission: 'Automatic',
    },
    {
      id: '2',
      name: 'BMW 7 Series',
      category: 'Executive Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      isSuperior: true,
      passengers: 5,
      transmission: 'Automatic',
    },
    {
      id: '3',
      name: 'Porsche Panamera',
      category: 'Sports Sedan',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      isSuperior: true,
      passengers: 4,
      transmission: 'Automatic',
    },
    {
      id: '4',
      name: 'Range Rover Sport',
      category: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
      isSuperior: false,
      passengers: 7,
      transmission: 'Automatic',
    },
    {
      id: '5',
      name: 'Audi A8',
      category: 'Premium Sedan',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      isSuperior: false,
      passengers: 5,
      transmission: 'Automatic',
    },
    {
      id: '6',
      name: 'Lexus LS',
      category: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop',
      isSuperior: false,
      passengers: 5,
      transmission: 'Automatic',
    },
  ]

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
                  alt={vehicle.name}
                  className="vehicle-image"
                />

                {/* SUPERIOR标签 */}
                {vehicle.isSuperior && (
                  <div className="superior-badge">
                    {strings.SUPERIOR_BADGE}
                  </div>
                )}

                {/* 悬停遮罩 */}
                <div className="vehicle-overlay">
                  <Button
                    variant="contained"
                    className="view-details-btn"
                    endIcon={<ArrowForward />}
                  >
                    {strings.VIEW_DETAILS}
                  </Button>
                </div>
              </div>

              {/* 车辆信息 */}
              <div className="vehicle-info">
                <div className="vehicle-category">{vehicle.category}</div>
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <div className="vehicle-specs">
                  <span className="vehicle-spec">
                    {vehicle.passengers} {strings.PASSENGERS}
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
          >
            {strings.VIEW_ALL_VEHICLES}
          </Button>
        </div>

      </div>
    </section>
  )
}

export default VehicleGridSection
