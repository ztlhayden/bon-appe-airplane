import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='contact me' />
      <Container>
        <h1>Contact Me!</h1>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage
