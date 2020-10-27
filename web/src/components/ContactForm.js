import React from "react";
import styles from './ContactForm.modules.css'

const ContactForm = () => {
  return (
    <form
      className={styles.root}
      action="https://formspree.io/f/xleobqbd"
      method="POST"
    >
      <label className={styles.label}>
        Your email:
        <input type="text" id="_replyto" />
      </label>
      <label>
        Your message:
        <textarea id="message" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm