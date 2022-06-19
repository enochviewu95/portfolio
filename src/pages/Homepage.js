import { NavbarComponenet } from '../components/navbar/NavbarComponent'
import { PopularServiceSection } from '../sections/popular_service/PopularServiceSection'
import { HeaderSection } from '../sections/header/HeaderSection'
import { AboutSection } from '../sections/about/AboutSection'
import { ServicesSection } from '../sections/services/ServicesSection'


function Homepage() {

    return (
        <>
            <NavbarComponenet />
            <HeaderSection />
            <AboutSection />
            <PopularServiceSection />
            <ServicesSection/>
        </>
    )
}

export default Homepage
