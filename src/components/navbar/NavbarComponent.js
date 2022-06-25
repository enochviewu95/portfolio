import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { navbarScrollerBackgroundChange } from '../../utilities/BackgroundChange'

import logo_black from '../../assets/icons/logo.png'
import logo_white from '../../assets/icons/logo-white.png'

import MenuWhite from '../../assets/icons/bars_white.svg'
import MenuBlack from '../../assets/icons/bars_black.svg'


export const NavbarComponenet = () => {

  //Declaration of state
  const [imageUrl, setImageUrl] = useState(logo_white)
  
  const [menu,setMenuIcon] = useState(MenuWhite)

  useEffect(() => {
    navbarScrollerBackgroundChange({ setImageUrl: setImageUrl, logoBlack: logo_black, logoWhite: logo_white })
    navbarScrollerBackgroundChange({ setImageUrl: setMenuIcon, logoBlack: MenuBlack, logoWhite: MenuWhite })
  }, [setImageUrl])


  return (
    <Navbar imageUrl={imageUrl} menu = {menu}/>
  )
}
