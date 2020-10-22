import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'

import styles from './bignavbuttons.module.css'

const BigNavButtons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}><Link to='/blog/flying'><Icon symbol='plane' /><span hidden>Flying</span></Link></li>
      <li className={styles.item}><Link to='/blog/food'><Icon symbol='burger' /><span hidden>Cooking</span></Link></li>
      <li className={styles.item}><Link to='/blog/code'><Icon symbol='code' /><span hidden>Code</span></Link></li>
    </ul>
  )
}

export default BigNavButtons
