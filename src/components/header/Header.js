import React, { useEffect } from 'react'
import { isElementInViewport, scroll } from '../../utilities/ElementInViewport'

import icon_one from '../../assets/icons/analytics.svg'
import icon_two from '../../assets/icons/window.svg'
import icon_three from '../../assets/icons/database.svg'
import './Header.css'

function Header() {

    useEffect(() => {
        const elementsToShow = document.querySelectorAll('.card');
        const loop = () => {
            elementsToShow.forEach(element => {
                console.log('Element', element)
                if (isElementInViewport(element)) {
                    element.classList.add('is-visible')
                } else {
                    element.classList.remove('is-visible')
                }
            });

            scroll(loop)
        }

        loop();
    })

    return (
        <header>
            <div className=' container header_container header-content'>
                <div className='header-main'>
                    <h1 className='header-title animate-pop-in'>Knight Master Development</h1>
                    <h3 className='header-subtitle animate-pop-in'>A useful start for your projects</h3>
                    <p className='header-button animate-pop-in'><a href="/" className='btn'>Get started today</a></p>
                </div>

                <div className='header-articles'>
                    <div className="card">
                        <img src={icon_one} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={icon_two} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={icon_three} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header