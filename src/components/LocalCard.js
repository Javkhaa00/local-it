import React from 'react';
import Data from '../json/local.json';

export const LocalCard = () => {

    const returnCard = (el) => {

        if (!el) return null;

        return (
            <div className="local--cards">
                <img src={el.imgUrl} alt="profile" />
                <span className="local--cards--text">{el.text}</span>
            </div >
        )
    }

    return (
        <div className="local--container">
            {Data.map(returnCard)}
        </div>
    )
};
