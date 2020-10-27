import React from 'react'
import Icon from './icon'

const SocialIcons = (props) => {
  return (
    <div className={props.className}>
      <ul>
        <li><a href='https://github.com/ztlhayden' target='_blank'><Icon symbol='github' /></a></li>
        <li><a href='https://twitter.com/haydenyounglex' target='_blank'><Icon symbol='twitter' /></a></li>
        <li><a href='https://linkedin.com/in/hayden-young-atp' target='_blank'><Icon symbol='linkedin' /></a></li>
      </ul>
    </div>
  )
}

export default SocialIcons
