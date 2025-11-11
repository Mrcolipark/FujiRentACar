/**
 * Newsletter Section Component
 * 邮件订阅区块：邮箱输入框 + 订阅按钮
 */

import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import { Send } from '@mui/icons-material'
import { strings } from '@/lang/home'
import '@/assets/css/newsletter-section.css'

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(strings.NEWSLETTER_INVALID_EMAIL)
      return
    }

    setIsSubmitting(true)

    // TODO: 实际订阅逻辑（可以集成 EmailJS 或其他服务）
    setTimeout(() => {
      setMessage(strings.NEWSLETTER_SUCCESS)
      setEmail('')
      setIsSubmitting(false)

      // 3秒后清除成功消息
      setTimeout(() => setMessage(''), 3000)
    }, 1000)
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <Typography variant="h2" className="newsletter-title">
            {strings.NEWSLETTER_TITLE}
          </Typography>
          <Typography variant="body1" className="newsletter-subtitle">
            {strings.NEWSLETTER_SUBTITLE}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={strings.NEWSLETTER_PLACEHOLDER}
                variant="outlined"
                fullWidth
                disabled={isSubmitting}
                className="newsletter-input"
                InputProps={{
                  sx: {
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& fieldset': { border: 'none' },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                className="newsletter-button"
                endIcon={<Send />}
              >
                {isSubmitting ? strings.NEWSLETTER_SUBMITTING : strings.NEWSLETTER_BUTTON}
              </Button>
            </div>

            {message && (
              <Typography
                className={`newsletter-message ${message.includes('成功') || message.includes('Success') ? 'success' : 'error'}`}
              >
                {message}
              </Typography>
            )}
          </Box>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
