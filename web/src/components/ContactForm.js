import React from 'react'
import styles from './ContactForm.module.css'
import {cn} from '../lib/helpers'

const ContactForm = () => {
  return (
    <form className={styles.root} acceptCharset='UTF-8' action='https://formspree.io/f/xleobqbd' autoComplete='off' method='POST' target='_blank'>
      <legend className={styles.headline}>Send a message:</legend>
      <label htmlFor='name'><span hidden>Name</span><br />
        <input className={styles.feild} name='name' type='text' id='name' required placeholder='Your Name' />
      </label><br />
      <label htmlFor='email'><span hidden>Email</span><br />
        <input className={styles.feild} name='email' type='email' id='email' required placeholder='Your Email' />
      </label><br />
      <label htmlFor='name'><span hidden>Message</span><br />
        <textarea className={styles.feild} id='message' name='message' cols='30' rows='3' placeholder="What's up?" />
      </label><br />
      <button className={cn(styles.button, styles.feild)} type='submit' value='Submit'>Send</button>
    </form>
  )
}

export default ContactForm
