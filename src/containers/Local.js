import React from 'react';
import { LocalCard } from '../components/LocalCard';


const Local = () => {
    return (
        <div className="local" id="local-section">
            <span className="title">Are you a Local Business</span>
            <LocalCard />
            <div className="local--more">Learn More</div>
        </div>
    )
}

export default Local;