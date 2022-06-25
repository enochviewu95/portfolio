import React from 'react'
import './Card.css'

export const Card = ({icon,onMouseHoverListener,onMouseHoverLeave}) => {
    return (
        <div className="card card-custom" onMouseOver={onMouseHoverListener} onMouseLeave={onMouseHoverLeave}>
            <img className='card-custom-image' src={icon} alt="..." />
            <div className="card-body">
                <h2>Lorem, ipsum.</h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
