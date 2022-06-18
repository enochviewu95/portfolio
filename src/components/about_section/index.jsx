import React from 'react'
import './index.css'

import image_one from '../../assets/images/portrait_two.jpg'

export const AboutSection = () => {
    return (
        <section className='container about-container'>

            <img className='about-experience-image' src={image_one} alt='About' />
            <div className='about-experience-container'>
                <div className='about-experience-content'>
                    <h4>About us</h4>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, impedit.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos corrupti? Incidunt ratione debitis deleniti sunt et, culpa dicta non esse dolores possimus a. Explicabo inventore sit laborum minus possimus!</p>
                </div>
                <div className='about-experience-analytics'>
                    <div className='about-experiences'>
                        <h4>Awards</h4>
                        <h1>800+</h1>
                    </div>
                    <div className='about-experiences'>
                        <h4>Happy Client</h4>
                        <h1>1200+</h1>
                    </div>
                    <div className='about-experiences'>
                        <h4>Years of experience</h4>
                        <h1>12+</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
