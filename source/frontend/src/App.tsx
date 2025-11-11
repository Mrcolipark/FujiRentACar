import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import env from '@/config/env.config'
import { RecaptchaProvider } from '@/context/RecaptchaContext'
import { SettingProvider } from '@/context/SettingContext'
import { UserProvider } from '@/context/UserContext'
import { NotificationProvider } from '@/context/NotificationContext'
// FUJI: UserContext 和 NotificationContext 已改为 stub 实现
import { init as initGA } from '@/utils/ga4'
import ScrollToTop from '@/components/ScrollToTop'
import NProgressIndicator from '@/components/NProgressIndicator'

if (env.GOOGLE_ANALYTICS_ENABLED) {
  initGA()
}

const Header = lazy(() => import('@/components/Header'))
const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Vehicles = lazy(() => import('@/pages/Vehicles'))
const VehicleDetail = lazy(() => import('@/pages/VehicleDetail'))
const ToS = lazy(() => import('@/pages/ToS'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NoMatch = lazy(() => import('@/pages/NoMatch'))
const Locations = lazy(() => import('@/pages/Locations'))
const Suppliers = lazy(() => import('@/pages/Suppliers'))
const Faq = lazy(() => import('@/pages/Faq'))
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'))
// FUJI: 已删除用户/预订相关页面
// SignIn, SignUp, Activate, ForgotPassword, ResetPassword,
// Checkout, CheckoutSession, Bookings, Booking,
// Settings, Notifications, ChangePassword

const AppLayout = () => {
  return (
    <SettingProvider>
      <UserProvider>
        <NotificationProvider>
          <RecaptchaProvider>
            <ScrollToTop />
            <div className="app">
              <Suspense fallback={<NProgressIndicator />}>
                <Header />
                <Outlet />
              </Suspense>
            </div>
          </RecaptchaProvider>
        </NotificationProvider>
      </UserProvider>
    </SettingProvider>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Search /> },
      { path: 'vehicles', element: <Vehicles /> },
      { path: 'vehicles/:id', element: <VehicleDetail /> },
      { path: 'about', element: <About /> },
      { path: 'tos', element: <ToS /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'contact', element: <Contact /> },
      { path: 'locations', element: <Locations /> },
      { path: 'faq', element: <Faq /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      ...(env.HIDE_SUPPLIERS ? [] : [{ path: 'suppliers', element: <Suppliers /> }]),
      { path: '*', element: <NoMatch /> }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
