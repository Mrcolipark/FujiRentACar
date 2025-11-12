import React, { useState } from 'react'
import * as bookcarsTypes from ':bookcars-types'
import { Container, Typography, Box } from '@mui/material'
import Layout from '@/components/Layout'
import AdvancedContactForm from '@/components/AdvancedContactForm'
import Footer from '@/components/Footer'
import { strings } from '@/lang/advanced-contact'

import '@/assets/css/contact.css'

const Contact = () => {
  const [user, setUser] = useState<bookcarsTypes.User>()

  const onLoad = (_user?: bookcarsTypes.User) => {
    setUser(_user)
  }

  return (
    <Layout onLoad={onLoad} strict={false}>
      {/* Hero Section */}
      <Box
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
            {strings.PAGE_TITLE}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 500, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: 'white' }}
          >
            {strings.PAGE_SUBTITLE}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className="contact-page">
        <AdvancedContactForm />
      </Container>
      <Footer />
    </Layout>
  )
}

export default Contact
