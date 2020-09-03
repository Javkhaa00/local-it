import React from 'react';
import { WhyCard } from '../components/WhyCard';

const Why = () => {
    return (
        <div className="why" id="why-section">
            <span className="title">Why We Are Doing This?</span>
            <WhyCard />
            <div className="why--circle1" />
            <div className="why--circle2" />
            <div className="why--circle3" />
        </div>
    )
}

export default Why;