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
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
            <h1 style={{textAlign: 'center'}}>Contact Me!</h1>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
