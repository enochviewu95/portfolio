import React, { useState, useEffect } from 'react'
import { Header } from '../components/header'
import { Navbar } from '../components/navbar'

import { displayOnScrollElement } from '../utilities/ElementInViewport'

import logo_black from '../assets/icons/logo.png'
import logo_white from '../assets/icons/logo-white.png'
import { navbarScrollerBackgroundChange } from '../utilities/NavScrollBackgroundChange'
import {AboutSection} from '../components/about_section'


function Homepage() {

    //Declaration of state
    const [imageUrl, setImageUrl] = useState(logo_white)

    useEffect(() => {
        navbarScrollerBackgroundChange({ setImageUrl: setImageUrl, logoBlack: logo_black, logoWhite: logo_white })
        displayOnScrollElement({ componentClassName: '.header-title' });
        displayOnScrollElement({ componentClassName: '.header-subtitle' });
        displayOnScrollElement({ componentClassName: '.header-button' });
        displayOnScrollElement({ componentClassName: '.card' });
        displayOnScrollElement({ componentClassName: '.about-experience-content' });
        displayOnScrollElement({ componentClassName: '.about-experiences' });
        displayOnScrollElement({ componentClassName: '.about-experience-image' });
    }, [setImageUrl])

    return (
        <>
            <Navbar imageUrl={imageUrl} />
            <Header />
            <AboutSection/>
        </>
    )
}

export default Homepage
