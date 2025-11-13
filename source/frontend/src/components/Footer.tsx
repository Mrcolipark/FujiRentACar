/**
 * LUZURIO Footer Component
 * 完全重构的4列布局Footer
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Dialog, DialogContent, DialogTitle, Tooltip } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import {
  MailOutline,
  PhoneOutlined,
  LocationOnOutlined,
  Instagram,
  Email,
  Facebook,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import * as bookcarsTypes from ':bookcars-types'
import { strings } from '@/lang/footer'
import NewsletterForm from '@/components/NewsletterForm'
import env from '@/config/env.config'

import Stripe from '@/assets/img/stripe.png'
import PayPal from '@/assets/img/paypal.png'
import '@/assets/css/footer.css'

const SecurePayment = env.PAYMENT_GATEWAY === bookcarsTypes.PaymentGateway.Stripe ? Stripe : PayPal

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

const Footer = () => {
  const navigate = useNavigate()
  const [qrCodeOpen, setQrCodeOpen] = useState(false)
  const [qrCodeType, setQrCodeType] = useState<'line' | 'wechat' | null>(null)

  // 检测是否为移动设备
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  const handleOpenQrCode = (type: 'line' | 'wechat') => {
    setQrCodeType(type)
    setQrCodeOpen(true)
  }

  const handleCloseQrCode = () => {
    setQrCodeOpen(false)
    setQrCodeType(null)
  }

  // 处理 LINE 点击
  const handleLineClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (isMobile()) {
      // 移动端：先尝试打开 LINE App，如果失败则打开网页版
      const lineScheme = 'line://ti/p/Jpe28k3dZJ'
      const lineWeb = 'https://line.me/R/ti/p/Jpe28k3dZJ'

      // 尝试打开 LINE App
      window.location.href = lineScheme

      // 如果 2 秒后还在页面上，说明没有安装 LINE，打开网页版
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = lineWeb
        }
      }, 2000)
    } else {
      // 电脑端：显示二维码
      handleOpenQrCode('line')
    }
  }

  // 处理微信点击 - 所有设备都显示二维码
  const handleWeChatClick = (e: React.MouseEvent) => {
    e.preventDefault()
    handleOpenQrCode('wechat')
  }

  // 获取 LINE 链接
  const getLineUrl = () => {
    return env.LINE_URL || '#'
  }

  // 获取 Instagram 链接
  const getInstagramUrl = () => {
    return env.INSTAGRAM_URL || '#'
  }

  // 获取 Facebook 链接
  const getFacebookUrl = () => {
    return env.FACEBOOK_URL || '#'
  }

  return (
    <>
      {/* 移动端固定底部联系栏 */}
      <div className="lz-mobile-contact-bar">
        <Tooltip title={strings.SOCIAL_FACEBOOK} arrow>
          <IconButton
            href={getFacebookUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="lz-mobile-contact-icon"
          >
            <Facebook />
          </IconButton>
        </Tooltip>
        <Tooltip title={strings.SOCIAL_LINE} arrow>
          <IconButton
            href={getLineUrl()}
            onClick={handleLineClick}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINE"
            className="lz-mobile-contact-icon"
          >
            <LineIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={strings.SOCIAL_WECHAT} arrow>
          <IconButton
            onClick={handleWeChatClick}
            aria-label="WeChat"
            className="lz-mobile-contact-icon"
          >
            <WeChatIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={strings.SOCIAL_INSTAGRAM} arrow>
          <IconButton
            href={getInstagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="lz-mobile-contact-icon"
          >
            <Instagram />
          </IconButton>
        </Tooltip>
        <Tooltip title={strings.SOCIAL_EMAIL} arrow>
          <IconButton
            href={`mailto:${env.CONTACT_EMAIL}`}
            aria-label="Email"
            className="lz-mobile-contact-icon"
          >
            <Email />
          </IconButton>
        </Tooltip>
      </div>

      <footer className="lz-footer">
        <div className="lz-footer-container">

        {/* Newsletter 订阅区 - 独立顶部区块 */}
        <div className="lz-footer-newsletter-section">
          <div className="lz-newsletter-content">
            <div className="lz-newsletter-text">
              <h3 className="lz-newsletter-title">{strings.NEWSLETTER_TITLE}</h3>
              <p className="lz-newsletter-description">{strings.NEWSLETTER_DESCRIPTION}</p>
            </div>
            <div className="lz-newsletter-form-wrapper">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* 主要内容区 - 4列布局 */}
        <div className="lz-footer-main">

          {/* 第1列：品牌信息 */}
          <div className="lz-footer-column lz-footer-brand">
            <h3 className="lz-footer-logo">{env.WEBSITE_NAME}</h3>
            <p className="lz-footer-description">{strings.BRAND_DESCRIPTION}</p>

            {/* 联系信息 */}
            <div className="lz-footer-contacts">
              <div className="lz-footer-contact-item">
                <PhoneOutlined className="lz-contact-icon" />
                <a href="tel:+81476769965">04-7676-9965</a>
              </div>
              <div className="lz-footer-contact-item">
                <MailOutline className="lz-contact-icon" />
                <a href={`mailto:${env.CONTACT_EMAIL}`}>{env.CONTACT_EMAIL}</a>
              </div>
              <div className="lz-footer-contact-item">
                <LocationOnOutlined className="lz-contact-icon" />
                <span>{strings.ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* 第2列：公司信息 */}
          <div className="lz-footer-column">
            <h4 className="lz-footer-title">{strings.CORPORATE}</h4>
            <ul className="lz-footer-links">
              <li onClick={() => navigate('/about')}>{strings.ABOUT}</li>
              <li onClick={() => navigate('/cookie-policy')}>{strings.COOKIE_POLICY}</li>
              <li onClick={() => navigate('/privacy')}>{strings.PRIVACY_POLICY}</li>
              <li onClick={() => navigate('/tos')}>{strings.TOS}</li>
            </ul>
          </div>

          {/* 第3列：服务 */}
          <div className="lz-footer-column">
            <h4 className="lz-footer-title">{strings.SERVICES_TITLE}</h4>
            <ul className="lz-footer-links">
              {!env.HIDE_SUPPLIERS && <li onClick={() => navigate('/suppliers')}>{strings.SUPPLIERS}</li>}
              <li onClick={() => navigate('/locations')}>{strings.LOCATIONS}</li>
              <li onClick={() => navigate('/search')}>{strings.SEARCH_VEHICLES}</li>
            </ul>
          </div>

          {/* 第4列：支持与社交 */}
          <div className="lz-footer-column">
            <h4 className="lz-footer-title">{strings.SUPPORT}</h4>
            <ul className="lz-footer-links">
              <li onClick={() => navigate('/contact')}>{strings.CONTACT}</li>
              <li onClick={() => navigate('/faq')}>{strings.FAQ}</li>
            </ul>

            {/* 社交媒体图标 */}
            <div className="lz-footer-social">
              <h5 className="lz-footer-social-title">{strings.FOLLOW_US}</h5>
              <div className="lz-social-icons">
                <Tooltip title={strings.SOCIAL_FACEBOOK} arrow>
                  <IconButton
                    href={getFacebookUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="lz-social-icon"
                  >
                    <Facebook />
                  </IconButton>
                </Tooltip>
                <Tooltip title={strings.SOCIAL_LINE} arrow>
                  <IconButton
                    href={getLineUrl()}
                    onClick={handleLineClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LINE"
                    className="lz-social-icon"
                  >
                    <LineIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={strings.SOCIAL_WECHAT} arrow>
                  <IconButton
                    onClick={handleWeChatClick}
                    aria-label="WeChat"
                    className="lz-social-icon"
                  >
                    <WeChatIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={strings.SOCIAL_INSTAGRAM} arrow>
                  <IconButton
                    href={getInstagramUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="lz-social-icon"
                  >
                    <Instagram />
                  </IconButton>
                </Tooltip>
                <Tooltip title={strings.SOCIAL_EMAIL} arrow>
                  <IconButton
                    href={`mailto:${env.CONTACT_EMAIL}`}
                    aria-label="Email"
                    className="lz-social-icon"
                  >
                    <Email />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>

        </div>

        {/* 底部栏：支付 + 版权 */}
        <div className="lz-footer-bottom">
          <div className="lz-footer-bottom-content">
            <div className="lz-footer-copyright">
              <span>{strings.COPYRIGHT_PART1}</span>
              <span>{strings.COPYRIGHT_PART2}</span>
            </div>
            <div className="lz-footer-payment">
              <span className="lz-payment-text">{strings.SECURE_PAYMENT}</span>
              <img
                src={SecurePayment}
                alt="Secure Payment"
                className="lz-payment-logo"
                style={{ height: env.PAYMENT_GATEWAY === bookcarsTypes.PaymentGateway.PayPal ? 64 : 'auto' }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* 社交媒体二维码弹窗 */}
      <Dialog
        open={qrCodeOpen}
        onClose={handleCloseQrCode}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'var(--lz-bg-secondary)',
            backgroundImage: 'none',
          }
        }}
      >
        <DialogTitle sx={{
          color: 'var(--lz-text-primary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--lz-border)'
        }}>
          <span>
            {qrCodeType === 'line' && strings.QR_LINE_TITLE}
            {qrCodeType === 'wechat' && strings.QR_WECHAT_TITLE}
          </span>
          <IconButton onClick={handleCloseQrCode} size="small" sx={{ color: 'var(--lz-text-secondary)' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          py: 4
        }}>
          <img
            src={
              qrCodeType === 'line' ? '/qr-line.png' :
              '/qr-wechat.png'
            }
            alt={
              qrCodeType === 'line' ? 'LINE QR Code' :
              'WeChat QR Code'
            }
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto',
              border: '1px solid var(--lz-border)',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#fff'
            }}
          />
          <p style={{
            color: 'var(--lz-text-secondary)',
            textAlign: 'center',
            margin: 0
          }}>
            {qrCodeType === 'line' && strings.QR_LINE_DESC}
            {qrCodeType === 'wechat' && strings.QR_WECHAT_DESC}
          </p>
        </DialogContent>
      </Dialog>
    </footer>
    </>
  )
}

export default Footer
