import React from 'react'
import {Link} from 'gatsby'
import Icon from './icon'

import styles from './FooterNav.module.css'

const FooterNav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.groups}>
        <ul>
          <li><Link to="/uses/">Uses</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          <li><a href="https://haydenyoung.me">Resume</a></li>
        </ul>
      </div>
      <div className={styles.groups}>
        <ul>
          <li><a href="tel:+18596840445">+1 (859) 684-0445</a></li>
          <li><a href="mailto:hayden@haydenyoung.me">hayden@haydenyoung.me</a></li>
          <li><a href="https://deadhead.design">Deadhead.Design</a></li>
        </ul>
      </div>
      <div className={styles.groups}>
        <ul>
          <li><a href="https://github.com/ztlhayden" target='_blank'><Icon symbol='hamburger'/></a></li>
          <li><a href="https://twitter.com/haydenyounglex" target='_blank'><Icon symbol='hamburger'/></a></li>
          <li><a href="https://linkedin.com/in/hayden-young-atp" target='_blank'><Icon symbol='hamburger'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterNav
