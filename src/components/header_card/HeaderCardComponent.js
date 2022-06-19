import React, { useEffect } from 'react'
import { HeaderCard } from './HeaderCard'

import { displayOnScrollElement } from '../../utilities/ElementInViewport'

export const HeaderCardComponent = ({ icon }) => {

    useEffect(() => {
        displayOnScrollElement({ componentClassName: '.header-card' });
    })

    return (
        <HeaderCard icon={icon} />
    )
}
