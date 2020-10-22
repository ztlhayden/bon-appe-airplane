import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'

import styles from './bignavbuttons.module.css'

const BigNavButtons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}><Link to='/archive/'><Icon symbol='code' /><span hidden>Flying</span></Link></li>
      <li className={styles.item}><Link to='/recipes'><Icon symbol='burger' /><span hidden>Cooking</span></Link></li>
      <li className={styles.item}><Link to='/archive/'><Icon symbol='plane' /><span hidden>Code</span></Link></li>
    </ul>
  )
}

export default BigNavButtons
