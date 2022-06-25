import React from 'react'
import './Services.css'
import { SwiperCardComponent } from '../../components/swiper_card/SwiperCardComponent';

import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css'
import 'swiper/css/pagination'



export const Services = () => {
    return (
        <section>
            <div className='container-fluid service-container'>
                <div className='service-content'>
                    <h4>Lorem ipsum dolor</h4>
                    <h2>Lorem ipsum dolor sit.</h2>
                </div>

                <Swiper
                    modules={[Mousewheel, Pagination]}
                    spaceBetween={50}
                    slidesPerView={4}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}>
                    <SwiperSlide>
                        <SwiperCardComponent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardComponent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardComponent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardComponent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardComponent />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
