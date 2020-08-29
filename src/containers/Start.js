import React from 'react';

const Start = () => {
    return (
        <div className="start">
            <div className="start--column">
                <span className="start--title">Know what you spend, know what you get</span>
                <span className="start--what">
                    What's your budget? Plug it in and find what your community has to offer
                </span>
                <div className="start--stores">
                    <img src="/assets/google-play.svg" alt="google-play" />
                    <img src="/assets/app-store.svg" alt="app-store" />
                </div>
            </div>
            <div className="start--phones">
                <div className="start--phones--circle1" />
                <div className="start--phones--circle2" />
                <div className="start--phones--circle3" />
                <div className="start--phones--img1">
                    <img src="/assets/iphone-x.png" alt="iphone-x" />
                </div>
                <div className="start--phones--img2">
                    <img src="/assets/galaxy-s8.png" alt="galaxy-s8" />
                </div>
            </div>
        </div>
    )
}

export default Start;