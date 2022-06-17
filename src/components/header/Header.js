import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <div className='header_container header-content'>
                <h1 className='header-title animate-pop-in'>Your awesome landing page</h1>
                <h3 className='header-subtitle animate-pop-in'>A useful start for your projects</h3>
                <p className='header-button animate-pop-in'><a href="/" className='btn'>Get started today</a></p>
            </div>
        </header>
    )
}

export default Header