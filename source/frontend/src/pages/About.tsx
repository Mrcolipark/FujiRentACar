import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material'
import {
  People as PeopleIcon,
  Security as SecurityIcon,
  Handshake as HandshakeIcon,
  Verified as QualityIcon,
} from '@mui/icons-material'
import { strings } from '@/lang/about'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

import '@/assets/css/about.css'

const About = () => {
  const navigate = useNavigate()

  const onLoad = () => { }

  // 企业价值观数据
  const coreValues = [
    {
      icon: <PeopleIcon sx={{ fontSize: 48, color: 'var(--lz-accent-primary)' }} />,
      title: strings.VALUE_1_TITLE,
      description: strings.VALUE_1_DESC,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: 'var(--lz-accent-primary)' }} />,
      title: strings.VALUE_2_TITLE,
      description: strings.VALUE_2_DESC,
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48, color: 'var(--lz-accent-primary)' }} />,
      title: strings.VALUE_3_TITLE,
      description: strings.VALUE_3_DESC,
    },
    {
      icon: <QualityIcon sx={{ fontSize: 48, color: 'var(--lz-accent-primary)' }} />,
      title: strings.VALUE_4_TITLE,
      description: strings.VALUE_4_DESC,
    },
  ]

  return (
    <Layout onLoad={onLoad} strict={false}>
      {/* Hero Section */}
      <Box
        className="about-hero"
        sx={{
          position: 'relative',
          background: '#1a1a1a',
          backgroundImage: 'url(/images/yilan.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 12 },
          mt: 8,
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' }, color: 'white' }}
          >
            {strings.HERO_TITLE}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 500, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: 'white' }}
          >
            {strings.HERO_SUBTITLE}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.95)' }}
          >
            {strings.HERO_DESCRIPTION}
          </Typography>
        </Container>
      </Box>

      {/* Company Info Section */}
      <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              {strings.COMPANY_TITLE}
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4 }}>
              {strings.COMPANY_SUBTITLE}
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'justify'
              }}
            >
              {strings.COMPANY_CONTENT}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Company Overview Section */}
      <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              {strings.OVERVIEW_TITLE}
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {strings.OVERVIEW_SUBTITLE}
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '200px 1fr' },
                gap: 3,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                p: 4,
              }}
            >
              {/* Company Name */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.COMPANY_NAME_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.COMPANY_NAME_VALUE}
              </Typography>

              <Box sx={{ gridColumn: '1 / -1', height: '1px', bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

              {/* Established */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.ESTABLISHED_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.ESTABLISHED_VALUE}
              </Typography>

              <Box sx={{ gridColumn: '1 / -1', height: '1px', bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

              {/* Capital */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.CAPITAL_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.CAPITAL_VALUE}
              </Typography>

              <Box sx={{ gridColumn: '1 / -1', height: '1px', bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

              {/* Headquarters */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.HEADQUARTERS_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.HEADQUARTERS_VALUE}
              </Typography>

              <Box sx={{ gridColumn: '1 / -1', height: '1px', bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

              {/* Business */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.BUSINESS_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.BUSINESS_VALUE}
              </Typography>

              <Box sx={{ gridColumn: '1 / -1', height: '1px', bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

              {/* Business Hours */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                {strings.BUSINESS_HOURS_LABEL}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 500 }}>
                {strings.BUSINESS_HOURS_VALUE}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
              {strings.VALUES_TITLE}
            </Typography>
            <Typography variant="h6" sx={{ color: '#555' }}>
              {strings.VALUES_SUBTITLE}
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 1000,
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {coreValues.map((value, index) => (
              <Card
                key={index}
                elevation={2}
                sx={{
                  height: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: 4,
                  bgcolor: 'white',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box mb={2}>{value.icon}</Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#666' }}>
                  {value.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, color: '#2c3e50' }}>
              {strings.HERO_SUBTITLE}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/')}
                sx={{
                  bgcolor: '#FF4757',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#E63946',
                  },
                }}
              >
                {strings.CTA_PRIMARY}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: '#FF4757',
                  borderWidth: 2,
                  color: '#FF4757',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#E63946',
                    bgcolor: 'rgba(255, 71, 87, 0.05)',
                  },
                }}
              >
                {strings.CTA_SECONDARY}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Layout>
  )
}

export default About
