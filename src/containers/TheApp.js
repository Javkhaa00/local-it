import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';


const TheApp = () => {

    return (
        <div className="app" id="theapp-section">
            <span className="title" style={{ paddingBottom: "24px" }}>The App</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="app--carousel--wrapper">
                        <img src="/assets/layer1.png" alt="pic1" />
                        <span className="app--carousel--title">Features 1</span>
                        <span className="app--carousel--text">
                            Save time sifting through pages when you use LocalIT- all and only small businesses finally in only
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="app--carousel--wrapper">
                        <img src="/assets/layer2.png" alt="pic1" />
                        <div>
                            <span className="app--carousel--title">Features 2</span>
                            <span className="app--carousel--text">
                                Be the first to know when 'your' favorite business have a new deal
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="app--carousel--wrapper">
                        <img src="/assets/layer3.png" alt="pic1" />
                        <span className="app--carousel--title">Features 3</span>
                        <span className="app--carousel--text">
                            Strengthen your community with your continued loyalty!
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="app--carousel">
                <div className="app--carousel--wrapper">
                    <img src="/assets/layer1.png" alt="pic1" />
                    <div className="app--carousel--wrapper--texts">
                        <span className="app--carousel--title">Features 1</span>
                        <span className="app--carousel--text">
                            Save time sifting through pages when you use LocalIT- all and only small businesses finally in only
                        </span>
                    </div>
                </div>
                <div className="app--carousel--wrapper">
                    <img src="/assets/layer2.png" alt="pic1" />
                    <div className="app--carousel--wrapper--texts">
                        <span className="app--carousel--title">Features 2</span>
                        <span className="app--carousel--text">
                            Be the first to know when 'your' favorite business have a new deal
                        </span>
                    </div>
                </div>
                <div className="app--carousel--wrapper">
                    <img src="/assets/layer3.png" alt="pic1" />
                    <div className="app--carousel--wrapper--texts">
                        <span className="app--carousel--title">Features 3</span>
                        <span className="app--carousel--text">
                            Strengthen your community with your continued loyalty!
                        </span>
                    </div>
                </div>
            </div>
            <div className="app--circle1" />
            <div className="app--circle2" />
            <div className="app--circle3" />
        </div>
    )
}

export default TheApp;