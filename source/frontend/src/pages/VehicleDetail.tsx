/**
 * FUJI RENT A CAR - Vehicle Detail Page
 * 車両詳細ページ：個別車両の詳細情報を表示
 */

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Container,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material'
import {
  ArrowBack,
  ArrowForward,
  WhatsApp,
  Email
} from '@mui/icons-material'
import { strings } from '@/lang/vehicle-detail'
import * as UserService from '@/services/UserService'
import env from '@/config/env.config'
import Layout from '@/components/Layout'
import '@/assets/css/vehicle-detail.css'

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

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [allVehicles, setAllVehicles] = useState<Vehicle[]>([])
  const [similarVehicles, setSimilarVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const language = UserService.getLanguage()

  // Load vehicles data
  useEffect(() => {
    fetch('/data/vehicles.json')
      .then(response => response.json())
      .then((data: Vehicle[]) => {
        setAllVehicles(data)
        const foundVehicle = data.find(v => v.id === id)
        setVehicle(foundVehicle || null)

        // Find similar vehicles (same category, exclude current)
        if (foundVehicle) {
          const similar = data
            .filter(v =>
              v.id !== foundVehicle.id &&
              getText(v.category) === getText(foundVehicle.category)
            )
            .slice(0, 3)
          setSimilarVehicles(similar)
        }

        setLoading(false)
      })
      .catch(error => {
        console.error('車両データの読み込みに失敗しました:', error)
        setLoading(false)
      })
  }, [id])

  // Get text based on current language
  const getText = (text: MultiLangText | string): string => {
    if (typeof text === 'string') return text
    return text[language as keyof MultiLangText] || text.en
  }

  const handleBackToVehicles = () => {
    navigate('/vehicles')
  }

  const handleViewVehicle = (vehicleId: string) => {
    navigate(`/vehicles/${vehicleId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsAppInquiry = () => {
    if (vehicle) {
      const message = `Hi, I'm interested in the ${getText(vehicle.name)} (${vehicle.brand} ${getText(vehicle.model)})`
      const whatsappUrl = `https://wa.me/${env.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleLINEInquiry = () => {
    if (env.LINE_ID) {
      window.open(`https://line.me/R/ti/p/${env.LINE_ID}`, '_blank')
    }
  }

  const handleEmailInquiry = () => {
    if (vehicle) {
      const subject = `Inquiry: ${getText(vehicle.name)}`
      const body = `Hi, I'm interested in the ${getText(vehicle.name)} (${vehicle.brand} ${getText(vehicle.model)}).

Please provide more information about:
- Availability
- Rental terms
- Additional features

Thank you!`
      window.location.href = `mailto:${env.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  }

  if (loading) {
    return (
      <Layout strict={false}>
        <div className="vehicle-detail-loading">
          <Container maxWidth="xl">
            <div className="loading-message">{strings.LOADING}</div>
          </Container>
        </div>
      </Layout>
    )
  }

  if (!vehicle) {
    return (
      <Layout strict={false}>
        <div className="vehicle-detail-not-found">
          <Container maxWidth="xl">
            <div className="not-found-message">{strings.VEHICLE_NOT_FOUND}</div>
            <Button
              variant="contained"
              startIcon={<ArrowBack />}
              onClick={handleBackToVehicles}
              className="back-btn"
            >
              {strings.BACK_TO_VEHICLES}
            </Button>
          </Container>
        </div>
      </Layout>
    )
  }

  return (
    <Layout strict={false}>
      <div className="vehicle-detail-page">
        <Container maxWidth="xl">

          {/* Back Button */}
          <Button
            variant="text"
            startIcon={<ArrowBack />}
            onClick={handleBackToVehicles}
            className="back-btn-top"
          >
            {strings.BACK_TO_VEHICLES}
          </Button>

          {/* Main Content */}
          <div className="vehicle-detail-content">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>

              {/* Left Column - Image */}
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                <div className="vehicle-image-section">
                  <div className="vehicle-main-image">
                    <img
                      src={vehicle.image}
                      alt={getText(vehicle.name)}
                      className="detail-image"
                    />
                    {vehicle.isSuperior && (
                      <div className="superior-badge">SUPERIOR</div>
                    )}
                  </div>
                </div>
              </Box>

              {/* Right Column - Details */}
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                <div className="vehicle-info-section">

                  {/* Brand and Name */}
                  <div className="vehicle-brand-tag">{vehicle.brand}</div>
                  <h1 className="vehicle-title">{getText(vehicle.name)}</h1>
                  <div className="vehicle-subtitle">{getText(vehicle.model)}</div>

                  {/* Price */}
                  <div className="vehicle-price-section">
                    <div className="price-amount">
                      ¥{vehicle.price.toLocaleString()}
                      <span className="price-unit">{strings.PER_DAY}</span>
                    </div>
                  </div>

                  {/* Specifications */}
                  <Card className="specs-card">
                    <CardContent>
                      <h3 className="specs-title">{strings.SPECIFICATIONS}</h3>
                      <div className="specs-grid">
                        <div className="spec-item">
                          <span className="spec-label">{strings.CATEGORY}</span>
                          <span className="spec-value">{getText(vehicle.category)}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{strings.SEATS}</span>
                          <span className="spec-value">{vehicle.seats} {strings.PASSENGERS}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{strings.TRANSMISSION}</span>
                          <span className="spec-value">{vehicle.transmission}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{strings.BRAND}</span>
                          <span className="spec-value">{vehicle.brand}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Buttons */}
                  <div className="contact-actions">
                    <h3 className="contact-title">{strings.CONTACT_US}</h3>
                    <div className="contact-buttons">
                      <Button
                        variant="contained"
                        startIcon={<WhatsApp />}
                        onClick={handleWhatsAppInquiry}
                        className="whatsapp-btn"
                        fullWidth
                      >
                        {strings.WHATSAPP_INQUIRY}
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleLINEInquiry}
                        className="line-btn"
                        fullWidth
                      >
                        {strings.LINE_INQUIRY}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Email />}
                        onClick={handleEmailInquiry}
                        className="email-btn"
                        fullWidth
                      >
                        {strings.EMAIL_INQUIRY}
                      </Button>
                    </div>
                  </div>

                </div>
              </Box>

            </Box>
          </div>

          {/* Similar Vehicles */}
          {similarVehicles.length > 0 && (
            <div className="similar-vehicles-section">
              <div className="similar-header">
                <h2 className="similar-title">{strings.SIMILAR_VEHICLES}</h2>
                <Button
                  variant="text"
                  endIcon={<ArrowForward />}
                  onClick={handleBackToVehicles}
                  className="view-all-link"
                >
                  {strings.VIEW_ALL_VEHICLES}
                </Button>
              </div>

              <div className="similar-vehicles-grid">
                {similarVehicles.map((simVehicle) => (
                  <div
                    key={simVehicle.id}
                    className="similar-vehicle-card"
                    onClick={() => handleViewVehicle(simVehicle.id)}
                  >
                    <div className="similar-image-wrapper">
                      <img
                        src={simVehicle.image}
                        alt={getText(simVehicle.name)}
                        className="similar-image"
                      />
                    </div>
                    <div className="similar-info">
                      <div className="similar-brand">{simVehicle.brand}</div>
                      <h4 className="similar-name">{getText(simVehicle.name)}</h4>
                      <div className="similar-price">
                        ¥{simVehicle.price.toLocaleString()}
                        <span className="similar-price-unit">{strings.PER_DAY}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </Container>
      </div>
    </Layout>
  )
}

export default VehicleDetail
