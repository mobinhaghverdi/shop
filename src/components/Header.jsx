import React from 'react';
import "./Header.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
import "swiper/css/bundle"

function Header() {
    return (
        <div className='header-container'>
            <div className='header-layer'>
                Welcom To The New World <br />
                <img src="./img/icon.svg" alt="" />
            </div>
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                className="swiper-container"
            >
                <SwiperSlide>
                    <div className="hero">
                        <img src="./img/bg.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero">
                        <img src="./img/bg-2.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Header;