import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { disableDevTools } from ':disable-react-devtools'
import * as helper from '@/utils/helper'
import * as UserService from '@/services/UserService'
import * as IpInfoService from '@/services/IpInfoService'
import env from '@/config/env.config'
import App from '@/App'

// LUZURIO: 导入自定义主题
import luzurioTheme from '@/theme/luzurio.theme'

import { strings as activateStrings } from '@/lang/activate'
import { strings as bookingStrings } from '@/lang/booking'
import { strings as bookingCarListStrings } from '@/lang/booking-car-list'
import { strings as bookingFilterStrings } from '@/lang/booking-filter'
import { strings as bookingListStrings } from '@/lang/booking-list'
import { strings as bookingsStrings } from '@/lang/bookings'
import { strings as carMultimediaFilterStrings } from '@/lang/car-multimedia-filter'
import { strings as carRangeFilterStrings } from '@/lang/car-range-filter'
import { strings as carRatingFilterStrings } from '@/lang/car-rating-filter'
import { strings as carsStrings } from '@/lang/cars'
import { strings as carSeatsFilterStrings } from '@/lang/car-seats-filter'
import { strings as carSpecsStrings } from '@/lang/car-specs'
import { strings as changePasswordStrings } from '@/lang/change-password'
import { strings as checkoutStrings } from '@/lang/checkout'
import { strings as commonStrings } from '@/lang/common'
import { strings as contactFormStrings } from '@/lang/contact-form'
import { strings as footerStrings } from '@/lang/footer'
import { strings as headerStrings } from '@/lang/header'
import { strings as homeStrings } from '@/lang/home'
import { strings as locationCarrouselStrings } from '@/lang/location-carrousel'
import { strings as mapStrings } from '@/lang/map'
import { strings as masterStrings } from '@/lang/master'
import { strings as noMatchStrings } from '@/lang/no-match'
import { strings as notificationsStrings } from '@/lang/notifications'
import { strings as resetPasswordStrings } from '@/lang/reset-password'
import { strings as searchSrings } from '@/lang/search'
import { strings as searchFormStrings } from '@/lang/search-form'
import { strings as settingsStrings } from '@/lang/settings'
import { strings as signInStrings } from '@/lang/sign-in'
import { strings as signUpStrings } from '@/lang/sign-up'
import { strings as tosStrings } from '@/lang/tos'
import { strings as newsletterFormStrings } from '@/lang/newsletter-form'
import { strings as privacyStrings } from '@/lang/privacy'
import { strings as faqListStrings } from '@/lang/faq-list'
import { strings as checkoutStatusStrings } from '@/lang/checkout-status'

// LUZURIO: 导入设计系统CSS变量（最先导入）
import '@/assets/css/luzurio-variables.css'
import '@/assets/css/common.css'
import '@/assets/css/index.css'

if (env.isProduction) {
  disableDevTools()
}

let language = env.DEFAULT_LANGUAGE
const user = JSON.parse(localStorage.getItem('bc-fe-user') ?? 'null')
let lang = UserService.getQueryLanguage()

if (lang) {
  if (!env.LANGUAGES.includes(lang)) {
    lang = localStorage.getItem('bc-fe-language')

    if (lang && !env.LANGUAGES.includes(lang)) {
      lang = env.DEFAULT_LANGUAGE
    }
  }

  try {
    if (user) {
      language = user.language
      if (lang && lang.length === 2 && user.language !== lang) {
        const data = {
          id: user.id,
          language: lang,
        }

        const status = await UserService.validateAccessToken()

        if (status === 200) {
          const _status = await UserService.updateLanguage(data)
          if (_status !== 200) {
            helper.error(null, commonStrings.CHANGE_LANGUAGE_ERROR)
          }
        }

        language = lang
      }
    } else if (lang) {
      language = lang
    }
    UserService.setLanguage(language)
    commonStrings.setLanguage(language)
  } catch (err) {
    helper.error(err, commonStrings.CHANGE_LANGUAGE_ERROR)
  }
} else {
  //
  // If language not set, set language by IP
  //
  let storedLang

  if (user && user.language) {
    storedLang = user.language
  } else {
    const slang = localStorage.getItem('bc-fe-language')
    if (slang && slang.length === 2) {
      storedLang = slang
    }
  }

  const updateLang = (_lang: string) => {
    UserService.setLanguage(_lang)

    activateStrings.setLanguage(_lang)
    bookingStrings.setLanguage(_lang)
    bookingCarListStrings.setLanguage(_lang)
    bookingFilterStrings.setLanguage(_lang)
    bookingListStrings.setLanguage(_lang)
    bookingsStrings.setLanguage(_lang)
    carMultimediaFilterStrings.setLanguage(_lang)
    carRangeFilterStrings.setLanguage(_lang)
    carRatingFilterStrings.setLanguage(_lang)
    carsStrings.setLanguage(_lang)
    carSeatsFilterStrings.setLanguage(_lang)
    changePasswordStrings.setLanguage(_lang)
    checkoutStrings.setLanguage(_lang)
    commonStrings.setLanguage(_lang)
    contactFormStrings.setLanguage(_lang)
    footerStrings.setLanguage(_lang)
    headerStrings.setLanguage(_lang)
    homeStrings.setLanguage(_lang)
    locationCarrouselStrings.setLanguage(_lang)
    mapStrings.setLanguage(_lang)
    masterStrings.setLanguage(_lang)
    noMatchStrings.setLanguage(_lang)
    notificationsStrings.setLanguage(_lang)
    resetPasswordStrings.setLanguage(_lang)
    searchSrings.setLanguage(_lang)
    searchFormStrings.setLanguage(_lang)
    settingsStrings.setLanguage(_lang)
    signInStrings.setLanguage(_lang)
    signUpStrings.setLanguage(_lang)
    tosStrings.setLanguage(_lang)
    carSpecsStrings.setLanguage(_lang)
    newsletterFormStrings.setLanguage(_lang)
    privacyStrings.setLanguage(_lang)
    faqListStrings.setLanguage(_lang)
    checkoutStatusStrings.setLanguage(_lang)
  }

  if (env.SET_LANGUAGE_FROM_IP && !storedLang) {
    const country = await IpInfoService.getCountryCode()

    if (['FR', 'MA'].includes(country)) {
      updateLang('fr')
    } else if (['US', 'GB', 'AU'].includes(country)) {
      updateLang('en')
    } else {
      updateLang(env.DEFAULT_LANGUAGE)
    }
  }
}

language = UserService.getLanguage()

// LUZURIO: 使用自定义深色主题
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={luzurioTheme}>
    <CssBaseline>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </CssBaseline>
  </ThemeProvider>,
)
