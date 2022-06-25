import React, { useEffect } from 'react'
import {Header} from './Header'

import { displayOnScrollElement } from '../../utilities/ElementInViewport'

export const HeaderSection = () => {

  useEffect(()=>{
    displayOnScrollElement({ componentClassName: '.header-title' });
    displayOnScrollElement({ componentClassName: '.header-subtitle' });
    displayOnScrollElement({ componentClassName: '.header-button' });
  })

  return (
    <>
        <Header/>
    </>
  )
}
