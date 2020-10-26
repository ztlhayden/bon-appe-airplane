import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link><br />
        <span>All Things Technical and Edible</span>
      </div>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li><Link to='/archive/'>Blog</Link></li>
          <li><Link to='/recipes/'>Recipes</Link></li>
          <li><Link to="/uses/">Uses</Link></li>
          <li><a href="https://haydenyoung.me">Resume</a></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
