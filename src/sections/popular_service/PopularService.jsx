import React from 'react'
import Apps from '../../assets/icons/apps.svg'
import Analysis from '../../assets/icons/analysis.svg'
import Bag from '../../assets/icons/bag.svg'
import Mobile from '../../assets/icons/mobile.svg'
import './PopularService.css'
import { CardComponent } from '../../components/cards/CardComponent'
import { onCardIconChange } from '../../utilities/BackgroundChange'

export const PopularService = () => {
    return (
        <section className='popular-service'>
            <div className='container popular-service-container'>
                <div className='popular-service-content'>
                    <h4>Our Popular services</h4>
                    <h2>We take care of your business</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam quis assumenda voluptatum iste libero fuga placeat facilis ratione quia.</p>
                </div>
                <div className='popular-service-articles'>
                    <article>
                        <CardComponent icon={Apps} mouseHoverListener={onCardIconChange}/>
                    </article>
                    <article>
                        <CardComponent icon={Analysis} mouseHoverListener={onCardIconChange}/>
                    </article>
                    <article>
                        <CardComponent icon={Bag} mouseHoverListener={onCardIconChange}/>
                    </article>
                    <article>
                        <CardComponent icon={Mobile} mouseHoverListener={onCardIconChange}/>
                    </article>
                </div>
            </div>
        </section>
    )
}
