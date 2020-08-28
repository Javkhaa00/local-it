import React from 'react';

export const Start = () => {
    return (
        <div className="start">
            <span className="start--know">Know what you spend, know what you get</span>
            <span className="start--what">
                What's your budget? Plug it in and find what your community has to offer
            </span>
            <div className="start--stores">
                <img src="/assets/google-play.png" alt="google-play" />
                <img src="/assets/app-store.png" alt="app-store" />
            </div>
        </div>
    )
}

export default Start;