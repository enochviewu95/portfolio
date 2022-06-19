import { NavbarComponenet } from '../components/navbar/NavbarComponent'
import { PopularServiceSection } from '../sections/popular_service/PopularServiceSection'
import { HeaderSection } from '../sections/header/HeaderSection'
import { AboutSection } from '../sections/about/AboutSection'


function Homepage() {

    return (
        <>
            <NavbarComponenet />
            <HeaderSection />
            <AboutSection />
            <PopularServiceSection />
        </>
    )
}

export default Homepage
