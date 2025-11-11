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
      <Container maxWidth="lg" className="contact-page">
        <Box className="contact-header" sx={{ textAlign: 'center', py: 6, mt: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            {strings.PAGE_TITLE}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {strings.PAGE_SUBTITLE}
          </Typography>
        </Box>

        <AdvancedContactForm />
      </Container>
      <Footer />
    </Layout>
  )
}

export default Contact
