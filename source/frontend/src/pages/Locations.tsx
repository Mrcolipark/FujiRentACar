import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material'
import { Phone as PhoneIcon, Email as EmailIcon, AccessTime as AccessTimeIcon, LocationOn as LocationOnIcon } from '@mui/icons-material'
import L from 'leaflet'
import env from '@/config/env.config'
import * as bookcarsTypes from ':bookcars-types'
import * as bookcarsHelper from ':bookcars-helper'
import * as LocationService from '@/services/LocationService'
import * as UserService from '@/services/UserService'
import Layout from '@/components/Layout'
import Map from '@/components/Map'
import SearchForm from '@/components/SearchForm'
import Footer from '@/components/Footer'

import '@/assets/css/locations.css'

interface LocationData {
  id: string
  name: { ja: string; en: string; zh: string }
  address: { ja: string; en: string; zh: string }
  latitude: number
  longitude: number
  phone: string
  email: string
  hours: string
  mapLink: string
  features: { ja: string[]; en: string[]; zh: string[] }
}

const Locations = () => {
  const [locations, setLocations] = useState<bookcarsTypes.Location[]>([])
  const [locationsData, setLocationsData] = useState<LocationData[]>([])
  const [pickupLocation, setPickupLocation] = useState('')
  const [openSearchFormDialog, setOpenSearchFormDialog] = useState(false)
  const language = UserService.getLanguage() as 'ja' | 'en' | 'zh'

  const onLoad = async () => {
    // 加载地图标记数据
    const _locations = await LocationService.getLocationsWithPosition()
    setLocations(_locations)

    // 加载完整门店数据
    try {
      const response = await fetch('/data/locations.json')
      const data = await response.json()
      setLocationsData(data.locations)
    } catch (error) {
      console.error('Failed to load locations data:', error)
    }
  }

  const pageTitle = {
    ja: '店舗一覧',
    en: 'Our Locations',
    zh: '门店位置'
  }

  const pageSubtitle = {
    ja: 'FUJI RENT A CAR の店舗をご案内します。お近くの店舗からお選びください。',
    en: 'Find our convenient rental locations. Choose the nearest branch for your rental needs.',
    zh: '查找我们便捷的租车地点。选择最近的分店满足您的租车需求。'
  }

  const viewOnMapText = {
    ja: '地図で見る',
    en: 'View on Map',
    zh: '在地图上查看'
  }

  return (
    <Layout onLoad={onLoad} strict={false}>
      {/* 页面标题 */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'var(--lz-text-primary)' }}>
            {pageTitle[language]}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {pageSubtitle[language]}
          </Typography>
        </Box>
      </Container>

      {/* 地图 */}
      <div className="locations">
        <Map
          position={new L.LatLng(env.MAP_LATITUDE, env.MAP_LONGITUDE)}
          initialZoom={env.MAP_ZOOM}
          locations={locations}
          locationsData={locationsData}
          onSelelectPickUpLocation={async (locationId) => {
            setPickupLocation(locationId)
            setOpenSearchFormDialog(true)
          }}
        />
      </div>

      {/* 门店信息卡片 */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {locationsData.map((location) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={location.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'var(--lz-accent-primary)' }}>
                    {location.name[language]}
                  </Typography>

                  {/* 信息网格 - 紧凑布局 */}
                  <Box sx={{ mb: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    {/* 地址 - 占两列 */}
                    <Box sx={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start' }}>
                      <LocationOnIcon sx={{ mr: 1, mt: 0.5, color: 'var(--lz-accent-primary)', fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {location.address[language]}
                      </Typography>
                    </Box>

                    {/* 电话 */}
                    <Box display="flex" alignItems="center">
                      <PhoneIcon sx={{ mr: 1, color: 'var(--lz-accent-primary)', fontSize: 18 }} />
                      <Typography variant="body2">
                        <a href={`tel:${location.phone}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                          {location.phone}
                        </a>
                      </Typography>
                    </Box>

                    {/* 营业时间 */}
                    <Box display="flex" alignItems="center">
                      <AccessTimeIcon sx={{ mr: 1, color: 'var(--lz-accent-primary)', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {location.hours}
                      </Typography>
                    </Box>

                    {/* 邮箱 - 占两列 */}
                    <Box sx={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center' }}>
                      <EmailIcon sx={{ mr: 1, color: 'var(--lz-accent-primary)', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                        <a href={`mailto:${location.email}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                          {location.email}
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  {/* 特色服务 */}
                  <Box mb={2}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      {language === 'ja' ? '特徴' : language === 'en' ? 'Features' : '特色服务'}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {location.features[language].map((feature, index) => (
                        <Box
                          key={index}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: 'rgba(255, 71, 87, 0.1)',
                            borderRadius: 1,
                            fontSize: '0.875rem'
                          }}
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* 查看地图按钮 */}
                  <Button
                    variant="outlined"
                    fullWidth
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2 }}
                  >
                    {viewOnMapText[language]}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        fullWidth={env.isMobile}
        maxWidth={false}
        open={openSearchFormDialog}
        onClose={() => {
          setOpenSearchFormDialog(false)
        }}
      >
        <DialogContent className="search-dialog-content">
          <SearchForm
            ranges={bookcarsHelper.getAllRanges()}
            pickupLocation={pickupLocation}
            onCancel={() => {
              setOpenSearchFormDialog(false)
            }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </Layout>
  )
}

export default Locations
