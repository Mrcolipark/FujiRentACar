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
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@mui/material'
import {
  ArrowBack,
  ArrowForward,
  Email,
  Close as CloseIcon,
  ChevronLeft,
  ChevronRight,
  Facebook
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { strings } from '@/lang/vehicle-detail'
import * as UserService from '@/services/UserService'
import { trackVehicleView, trackContactClick, trackImageCarousel } from '@/utils/ga4'
import env from '@/config/env.config'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import '@/assets/css/vehicle-detail.css'

// LINE 官方图标
const LineIcon = () => (
  <SvgIcon>
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </SvgIcon>
)

// WeChat 微信官方图标
const WeChatIcon = () => (
  <SvgIcon>
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </SvgIcon>
)

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
  images?: string[]  // 图片数组（用于轮播）
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
  const [showLineQR, setShowLineQR] = useState(false)
  const [showWeChatQR, setShowWeChatQR] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const language = UserService.getLanguage()

  // 检测是否为移动设备
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

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

          // Track vehicle view in GA4
          if (env.GOOGLE_ANALYTICS_ENABLED) {
            trackVehicleView(
              foundVehicle.id,
              getText(foundVehicle.name),
              foundVehicle.brand
            )
          }
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

  const handleLINEInquiry = () => {
    // Track LINE contact click
    if (env.GOOGLE_ANALYTICS_ENABLED) {
      trackContactClick('LINE', 'vehicle_detail')
    }

    if (isMobile()) {
      // 移动端：先尝试打开 LINE App，如果失败则打开网页版
      const lineScheme = `line://ti/p/${env.LINE_ID}`
      const lineWeb = `https://line.me/R/ti/p/${env.LINE_ID}`

      // 尝试打开 LINE App
      window.location.href = lineScheme

      // 如果 2 秒后还在页面上，说明没有安装 LINE，打开网页版
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = lineWeb
        }
      }, 2000)
    } else {
      // 桌面端：显示二维码对话框
      setShowLineQR(true)
    }
  }

  const handleEmailInquiry = () => {
    // Track email contact click
    if (env.GOOGLE_ANALYTICS_ENABLED) {
      trackContactClick('Email', 'vehicle_detail')
    }

    navigate('/contact')
  }

  const handleWeChatInquiry = () => {
    // Track WeChat contact click
    if (env.GOOGLE_ANALYTICS_ENABLED) {
      trackContactClick('WeChat', 'vehicle_detail')
    }

    // 微信：桌面端显示二维码，移动端也显示二维码（微信没有直接的网页深链接）
    setShowWeChatQR(true)
  }

  const handleFacebookInquiry = () => {
    // Track Facebook contact click
    if (env.GOOGLE_ANALYTICS_ENABLED) {
      trackContactClick('Facebook' as any, 'vehicle_detail')
    }

    // Facebook：直接打开 Messenger 链接
    const facebookUrl = env.FACEBOOK_URL || 'https://m.me/61580388637537'
    window.open(facebookUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCloseQR = () => {
    setShowLineQR(false)
  }

  const handleCloseWeChatQR = () => {
    setShowWeChatQR(false)
  }

  // 获取车辆的所有图片（如果有images数组则使用，否则使用单张image）
  const getVehicleImages = (): string[] => {
    if (!vehicle) return []
    return vehicle.images && vehicle.images.length > 0 ? vehicle.images : [vehicle.image]
  }

  // 上一张图片
  const handlePreviousImage = () => {
    const images = getVehicleImages()
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)

    // Track image carousel interaction
    if (env.GOOGLE_ANALYTICS_ENABLED && vehicle) {
      trackImageCarousel(vehicle.id, newIndex)
    }
  }

  // 下一张图片
  const handleNextImage = () => {
    const images = getVehicleImages()
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)

    // Track image carousel interaction
    if (env.GOOGLE_ANALYTICS_ENABLED && vehicle) {
      trackImageCarousel(vehicle.id, newIndex)
    }
  }

  // 切换车辆时重置图片索引
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [id])

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

              {/* Left Column - Image Gallery */}
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                <div className="vehicle-image-section">
                  <div className="vehicle-main-image">
                    <img
                      src={getVehicleImages()[currentImageIndex]}
                      alt={getText(vehicle.name)}
                      className="detail-image"
                    />

                    {/* 左右翻页按钮（只在有多张图片时显示） */}
                    {getVehicleImages().length > 1 && (
                      <>
                        <IconButton
                          onClick={handlePreviousImage}
                          className="image-nav-btn image-nav-prev"
                          aria-label="Previous image"
                        >
                          <ChevronLeft />
                        </IconButton>
                        <IconButton
                          onClick={handleNextImage}
                          className="image-nav-btn image-nav-next"
                          aria-label="Next image"
                        >
                          <ChevronRight />
                        </IconButton>
                      </>
                    )}
                  </div>

                  {/* 图片指示器（只在有多张图片时显示） */}
                  {getVehicleImages().length > 1 && (
                    <div className="image-indicators">
                      {getVehicleImages().map((_, index) => (
                        <button
                          key={index}
                          className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
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
                        startIcon={<LineIcon />}
                        onClick={handleLINEInquiry}
                        className="line-btn"
                        fullWidth
                      >
                        {strings.LINE_INQUIRY}
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<WeChatIcon />}
                        onClick={handleWeChatInquiry}
                        className="wechat-btn"
                        fullWidth
                      >
                        {strings.WECHAT_INQUIRY}
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<Facebook />}
                        onClick={handleFacebookInquiry}
                        className="facebook-btn"
                        fullWidth
                      >
                        {strings.FACEBOOK_INQUIRY}
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

      {/* LINE QR Code Dialog */}
      <Dialog
        open={showLineQR}
        onClose={handleCloseQR}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>{strings.LINE_QR_TITLE}</span>
          <IconButton
            aria-label="close"
            onClick={handleCloseQR}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ textAlign: 'center', py: 4 }}>
          <Box sx={{ mb: 2 }}>
            <img
              src="/qr-line.png"
              alt="LINE QR Code"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#fff'
              }}
            />
          </Box>
          <Box sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            {strings.LINE_QR_INSTRUCTION}
          </Box>
        </DialogContent>
      </Dialog>

      {/* WeChat QR Code Dialog */}
      <Dialog
        open={showWeChatQR}
        onClose={handleCloseWeChatQR}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>{strings.WECHAT_QR_TITLE}</span>
          <IconButton
            aria-label="close"
            onClick={handleCloseWeChatQR}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ textAlign: 'center', py: 4 }}>
          <Box sx={{ mb: 2 }}>
            <img
              src="/qr-wechat.png"
              alt="WeChat QR Code"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#fff'
              }}
            />
          </Box>
          <Box sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            {strings.WECHAT_QR_INSTRUCTION}
          </Box>
        </DialogContent>
      </Dialog>

      <Footer />
    </Layout>
  )
}

export default VehicleDetail
