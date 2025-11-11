import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  // Checkbox,
  Dialog,
  DialogContent,
  // FormControlLabel,
  Tab,
  Tabs
} from '@mui/material'
import {} from '@mui/icons-material'
import L from 'leaflet'
import * as bookcarsTypes from ':bookcars-types'
import * as bookcarsHelper from ':bookcars-helper'
import env from '@/config/env.config'
import { strings as commonStrings } from '@/lang/common'
import { strings as carsStrings } from '@/lang/cars'
import { strings } from '@/lang/home'
import * as UserService from '@/services/UserService'
import * as CountryService from '@/services/CountryService'
import * as LocationService from '@/services/LocationService'
import * as PaymentService from '@/services/PaymentService'
import Layout from '@/components/Layout'
import TabPanel, { a11yProps } from '@/components/TabPanel'
import LocationCarrousel from '@/components/LocationCarrousel'
import SearchForm from '@/components/SearchForm'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import FaqList from '@/components/FaqList'
import StatsSection from '@/components/StatsSection'
import ReputationSection from '@/components/ReputationSection'
import ServicesSection from '@/components/ServicesSection'
import PartnersSection from '@/components/PartnersSection'
import VehicleGridSection from '@/components/VehicleGridSection'
import QualitySection from '@/components/QualitySection'
import LocationsSection from '@/components/LocationsSection'
// import ReviewsSection from '@/components/ReviewsSection'
// import NewsletterSection from '@/components/NewsletterSection'

import '@/assets/css/home.css'
import '@/assets/css/luzurio-enhancements.css'

const Home = () => {
  const navigate = useNavigate()

  const [countries, setCountries] = useState<bookcarsTypes.CountryInfo[]>([])
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropOffLocation, setDropOffLocation] = useState('')
  const [sameLocation, setSameLocation] = useState(true)
  const [tabValue, setTabValue] = useState(0)
  const [openLocationSearchFormDialog, setOpenLocationSearchFormDialog] = useState(false)
  const [locations, setLocations] = useState<bookcarsTypes.Location[]>([])
  const [ranges, setRanges] = useState([bookcarsTypes.CarRange.Mini, bookcarsTypes.CarRange.Midi])
  const [openRangeSearchFormDialog, setOpenRangeSearchFormDialog] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement
      if (entry.isIntersecting) {
        video.muted = true
        video.play()
      } else {
        video.pause()
      }
    })
  }

  const onLoad = async () => {
    const _countries = await CountryService.getCountriesWithLocations('', true, env.MIN_LOCATIONS)
    setCountries(_countries)
    const _locations = await LocationService.getLocationsWithPosition()
    setLocations(_locations)

    const observer = new IntersectionObserver(handleIntersection)
    const video = document.getElementById('cover') as HTMLVideoElement
    if (video) {
      observer.observe(video)
    } else {
      console.error('Cover video not found')
    }
  }

  const language = UserService.getLanguage()

  return (
    <Layout onLoad={onLoad} strict={false}>

      <div className="home">
        <div className="home-content">

          <div className="video">
            <img
              src="/images/hero-car.jpg"
              alt="Luxury Car"
              onLoad={() => {
                setVideoLoaded(true)
              }}
            />
          </div>

          <div className="home-cover">
            <div className="home-title">{strings.BRAND_NAME}</div>
            <h1 className="hero-main-title">{strings.HERO_TITLE}</h1>
            <p className="hero-subtitle">
              {strings.HERO_SUBTITLE}
            </p>
            <Button
              variant="contained"
              className="hero-cta"
              onClick={() => navigate('/search')}
            >
              {strings.HERO_CTA}
            </Button>
          </div>

        </div>

        {/* LUZURIO: 统计数据区 */}
        <StatsSection />

        {/* LUZURIO: 品牌声誉区 */}
        <ReputationSection />

        {/* LUZURIO: 服务特色区 */}
        <ServicesSection />

        {/* LUZURIO: 合作伙伴Logo展示区 */}
        <PartnersSection />

        {/* LUZURIO: 车辆网格展示区 */}
        <VehicleGridSection />

        {/* LUZURIO: 品质保证区 */}
        <QualitySection />

        {/* LUZURIO: 客户评价区 - 已移除 */}
        {/* <ReviewsSection /> */}

        {countries.length > 0 && (
          <div className="destinations">
            <h1>{strings.DESTINATIONS_TITLE}</h1>
            <div className="tabs">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="destinations"
                TabIndicatorProps={{ sx: { display: env.isMobile ? 'none' : null } }}
                sx={{
                  '& .MuiTabs-flexContainer': {
                    flexWrap: 'wrap',
                  },
                }}
              >
                {
                  countries.map((country, index) => (
                    <Tab key={country._id} label={country.name?.toUpperCase()} {...a11yProps(index)} />
                  ))
                }
              </Tabs>

              {
                countries.map((country, index) => (
                  <TabPanel key={country._id} value={tabValue} index={index}>
                    <LocationCarrousel
                      locations={country.locations!}
                      onSelect={(location) => {
                        setPickupLocation(location._id)
                        setOpenLocationSearchFormDialog(true)
                      }}
                    />
                  </TabPanel>
                ))
              }
            </div>
          </div>
        )}

        <div className="faq">
          <FaqList />
        </div>

        {/* LUZURIO: 营业所地图展示区 - 新设计 */}
        <LocationsSection />

        {/* Newsletter 订阅区 - 已移除，订阅功能保留在Footer */}
        {/* <NewsletterSection /> */}

      </div>

      <Dialog
        // fullWidth={env.isMobile}
        maxWidth={false}
        open={openLocationSearchFormDialog}
        onClose={() => {
          setOpenLocationSearchFormDialog(false)
        }}
      >
        <DialogContent className="search-dialog-content">
          <SearchForm
            ranges={bookcarsHelper.getAllRanges()}
            pickupLocation={pickupLocation}
          // onCancel={() => {
          //   setOpenLocationSearchFormDialog(false)
          // }}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        // fullWidth={env.isMobile}
        maxWidth={false}
        open={openRangeSearchFormDialog}
        onClose={() => {
          setOpenRangeSearchFormDialog(false)
        }}
      >
        <DialogContent className="search-dialog-content">
          <SearchForm
            ranges={ranges}
          // onCancel={() => {
          //   setOpenRangeSearchFormDialog(false)
          // }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </Layout>
  )
}

export default Home
