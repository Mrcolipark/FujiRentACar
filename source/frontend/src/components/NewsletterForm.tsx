import React from 'react'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  CircularProgress,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import env from '@/config/env.config'
import { strings as commonStrings } from '@/lang/common'
import { strings } from '@/lang/newsletter-form'
import * as helper from '@/utils/helper'
import { sendNewsletterSubscription } from '@/services/EmailService'
import { schema, FormFields } from '@/models/NewsletterForm'

import '@/assets/css/newsletter-form.css'

const NewsletterForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, clearErrors } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onSubmit'
  })

  const onSubmit = async ({ email }: FormFields) => {
    try {
      console.log('📧 提交Newsletter订阅:', email)

      // 使用 EmailJS 发送订阅邮件
      const result = await sendNewsletterSubscription(email)

      if (result.success) {
        reset()
        helper.info(strings.SUCCESS)
        console.log('✅ Newsletter订阅成功')
      } else {
        helper.error(result.message || strings.ERROR)
        console.error('❌ Newsletter订阅失败:', result.message)
      }
    } catch (err) {
      console.error('❌ Newsletter订阅异常:', err)
      helper.error(err)
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>{strings.TITLE}</h1>
      <p>{strings.SUB_TITLE}</p>

      <div className="form">
        <FormControl fullWidth margin="normal" size="small" className="input" error={!!errors.email}>
          <InputLabel className="required">{commonStrings.EMAIL}</InputLabel>
          <OutlinedInput
            type="text"
            {...register('email')}
            label={commonStrings.EMAIL}
            size="small"
            required
            autoComplete="off"
            inputProps={{
              'aria-label': 'email',
            }}
            onChange={() => {
              if (errors.email) {
                clearErrors('email')
              }
            }}
          />
          <FormHelperText error={!!errors.email}>{errors.email?.message || ''}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" className="btn-primary btn" aria-label="Subscribe" disabled={isSubmitting}>
          {
            isSubmitting
              ? <CircularProgress color="inherit" size={24} />
              : strings.SUBSCRIBE
          }
        </Button>
      </div>
    </form>
  )
}

export default NewsletterForm
