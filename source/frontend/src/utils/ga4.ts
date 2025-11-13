import ga4 from 'react-ga4'
import env from '@/config/env.config'

const TRACKING_ID = env.GOOGLE_ANALYTICS_ID
const { isProduction } = env

export const init = () => {
  if (typeof window === 'undefined') {
    return
  }
  let fired = false
  const loadAnalytics = () => {
    if (!fired) {
      ga4.initialize(TRACKING_ID, { testMode: !isProduction })
      fired = true
    }
  }

  const startAnalytics = () => {
    window.removeEventListener('mousemove', startAnalytics)
    window.removeEventListener('touchstart', startAnalytics)
    loadAnalytics()
  }

  window.addEventListener('mousemove', startAnalytics, { once: true })
  window.addEventListener('touchstart', startAnalytics, { once: true })
}

export const sendEvent = (name: string) => ga4.event('screen_view', {
  app_name: 'bookcars',
  screen_name: name,
})

export const sendPageview = (path: string) => ga4.send({
  hitType: 'pageview',
  page: path
})

// Custom event tracking functions

/**
 * Track contact button clicks (LINE, WeChat, Email)
 */
export const trackContactClick = (contactMethod: 'LINE' | 'WeChat' | 'Email', location?: string) => {
  ga4.event('contact_click', {
    method: contactMethod,
    location: location || 'unknown',
  })
}

/**
 * Track vehicle detail views
 */
export const trackVehicleView = (vehicleId: string, vehicleName: string, brand: string) => {
  ga4.event('view_item', {
    item_id: vehicleId,
    item_name: vehicleName,
    item_brand: brand,
    item_category: 'vehicle',
  })
}

/**
 * Track contact form submissions
 */
export const trackFormSubmission = (formType: string, success: boolean) => {
  ga4.event('form_submission', {
    form_type: formType,
    success: success,
  })
}

/**
 * Track search/filter usage
 */
export const trackSearch = (searchType: string, searchTerm?: string) => {
  ga4.event('search', {
    search_term: searchTerm || '',
    search_type: searchType,
  })
}

/**
 * Track vehicle image carousel interactions
 */
export const trackImageCarousel = (vehicleId: string, imageIndex: number) => {
  ga4.event('image_carousel', {
    vehicle_id: vehicleId,
    image_index: imageIndex,
  })
}
