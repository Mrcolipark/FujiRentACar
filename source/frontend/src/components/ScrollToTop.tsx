import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { sendPageview } from '@/utils/ga4'
import env from '@/config/env.config'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Send pageview to Google Analytics
    if (env.GOOGLE_ANALYTICS_ENABLED) {
      sendPageview(pathname)
    }
  }, [pathname])

  return null
}

export default ScrollToTop
