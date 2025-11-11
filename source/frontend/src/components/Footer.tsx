/**
 * LUZURIO Footer Component
 * 完全重构的4列布局Footer
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import {
  MailOutline,
  PhoneOutlined,
  LocationOnOutlined,
  FacebookTwoTone as FacebookIcon,
  X,
  LinkedIn,
  Instagram,
} from '@mui/icons-material'
import * as bookcarsTypes from ':bookcars-types'
import { strings } from '@/lang/footer'
import NewsletterForm from '@/components/NewsletterForm'
import env from '@/config/env.config'

import Stripe from '@/assets/img/stripe.png'
import PayPal from '@/assets/img/paypal.png'
import '@/assets/css/footer.css'

const SecurePayment = env.PAYMENT_GATEWAY === bookcarsTypes.PaymentGateway.Stripe ? Stripe : PayPal

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="lz-footer">
      <div className="lz-footer-container">

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
                <span>+81-3-1234-5678</span>
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
              <li onClick={() => navigate('/faq')}>{strings.FAQ}</li>
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
                <IconButton href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="lz-social-icon">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://x.com/" target="_blank" aria-label="X" className="lz-social-icon">
                  <X />
                </IconButton>
                <IconButton href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" className="lz-social-icon">
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="lz-social-icon">
                  <Instagram />
                </IconButton>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lz-footer-newsletter">
              <NewsletterForm />
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
    </footer>
  )
}

export default Footer
