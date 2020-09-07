import React from 'react';
import { UsCard } from '../components/UsCard';

const WhoWeAre = () => {
    return (
        <div className="whoweare" id="whoweare-section">
            <span className="whoweare--title">Who we are?</span>
            <UsCard />
            <div className="whoweare--circle1"/>
            <div className="whoweare--circle2" />
            <div className="whoweare--circle3" />
        </div>
    )
}

export default WhoWeAre;