import React from 'react'
import HamburgerIcon from './hamburger'
import PlaneIcon from './planesq'
import Burger from './burgersq'
import Code from './codesq'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'burger':
      return <Burger />
    case 'code':
      return <Code />
    case 'plane':
      return <PlaneIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
