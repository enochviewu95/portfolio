import React, { useEffect } from 'react'
import { About } from './About'

import { displayOnScrollElement } from '../../utilities/ElementInViewport'

export const AboutSection = () => {

  useEffect(() => {
    displayOnScrollElement({ componentClassName: '.about-experience-content' });
    displayOnScrollElement({ componentClassName: '.about-experiences' });
    displayOnScrollElement({ componentClassName: '.about-experience-image' });
  })

  return (
    <>
      <About />
    </>
  )
}
