import icon_one from '../../assets/icons/analytics.svg'
import icon_two from '../../assets/icons/window.svg'
import icon_three from '../../assets/icons/database.svg'
import './Header.css'
import { HeaderCardComponent } from '../../components/header_card/HeaderCardComponent'

/* A function that returns a header. */
export const Header = () => {

    return (
        <header>
            <div className=' container header_container header-content'>
                <div className='header-main'>
                    <h1 className='header-title'>Knight Master Development</h1>
                    <h3 className='header-subtitle'>A useful start for your projects</h3>
                    <p className='header-button'><a href="/" className='btn'>Get started today</a></p>
                </div>

                <div className='header-articles'>
                    <HeaderCardComponent icon={icon_one} />
                    <HeaderCardComponent icon={icon_two} />
                    <HeaderCardComponent icon={icon_three} />
                </div>
            </div>
        </header>
    )
}
