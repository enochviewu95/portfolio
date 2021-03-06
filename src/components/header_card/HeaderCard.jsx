import React from 'react'
import './HeaderCard.css'

export const HeaderCard = ({icon}) => {
    return (
        <div className="card header-card">
            <img src={icon} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
