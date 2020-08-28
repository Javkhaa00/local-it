import React, { useState } from 'react'
import Data from '../json/us.json';

export const WhyCard = () => {

    const returnCard = (el) => {

        if (!el) return null;

        return (
            <div className="why--cards">
                <span className="desc-text">{el.text}</span>
            </div >
        )
    }

    return (
        <div className="why--container">
            {Data.map(returnCard)}
        </div>
    )
};
