import React from 'react';
import Data from '../json/local.json';

export const LocalCard = () => {

    const returnCard = (el) => {

        if (!el) return null;

        return (
            <div className="local--cards">
                <div className="local--cards--imgs">
                    <img src={el.imgUrl} alt="profile" />
                </div>
                <div className="local--cards--texts">
                    <span className="local--cards--text">{el.text}</span>
                </div>
            </div >
        )
    }

    return (
        <div className="local--container">
            {Data.map(returnCard)}
        </div>
    )
};
