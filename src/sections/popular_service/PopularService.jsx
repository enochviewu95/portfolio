import React, { useState } from 'react'
import Apps from '../../assets/icons/apps.svg'
import Analysis from '../../assets/icons/analysis.svg'
import Bag from '../../assets/icons/bag.svg'
import Mobile from '../../assets/icons/mobile.svg'
import AppsWhite from '../../assets/icons/apps_white.svg'
import AnalysisWhite from '../../assets/icons/analysis_white.svg'
import BagWhite from '../../assets/icons/bag_white.svg'
import MobileWhite from '../../assets/icons/mobile_white.svg'
import './PopularService.css'
import { CardComponent } from '../../components/cards/CardComponent'
import { onCardHover } from '../../utilities/BackgroundChange'

export const PopularService = () => {

    const [imageOne, setImageOne] = useState(Apps);
    const [imageTwo, setImageTwo] = useState(Analysis);
    const [imageThree, setImageThree] = useState(Bag);
    const [imageFour, setImageFour] = useState(Mobile);

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
                        <CardComponent icon={imageOne}
                            mouseHoverListener={() => onCardHover({ setIcon: setImageOne, iconName: AppsWhite })}
                            mouseHoverLeave={() => onCardHover({ setIcon: setImageOne, iconName: Apps })} />
                    </article>
                    <article>
                        <CardComponent icon={imageTwo}
                            mouseHoverListener={() => onCardHover({ setIcon: setImageTwo, iconName: AnalysisWhite })}
                            mouseHoverLeave={() => onCardHover({ setIcon: setImageTwo, iconName: Analysis })} />
                    </article>
                    <article>
                        <CardComponent icon={imageThree}
                            mouseHoverListener={() => onCardHover({ setIcon: setImageThree, iconName: BagWhite })}
                            mouseHoverLeave={() => onCardHover({ setIcon: setImageThree, iconName: Bag })} />
                    </article>
                    <article>
                        <CardComponent icon={imageFour}
                            mouseHoverListener={() => onCardHover({ setIcon: setImageFour, iconName: MobileWhite })}
                            mouseHoverLeave={() => onCardHover({ setIcon: setImageFour, iconName: Mobile })} />
                    </article>
                </div>
            </div>
        </section>
    )
}
