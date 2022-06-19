import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { navbarScrollerBackgroundChange } from '../../utilities/BackgroundChange'

import logo_black from '../../assets/icons/logo.png'
import logo_white from '../../assets/icons/logo-white.png'

export const NavbarComponenet = () => {

  //Declaration of state
  const [imageUrl, setImageUrl] = useState(logo_white)

  useEffect(() => {
    navbarScrollerBackgroundChange({ setImageUrl: setImageUrl, logoBlack: logo_black, logoWhite: logo_white })

  }, [setImageUrl])


  return (
    <Navbar imageUrl={imageUrl} />
  )
}
