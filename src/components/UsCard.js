import React, { useState } from 'react'
import Data from '../json/us.json';

export const UsCard = () => {

    const returnCard = (el) => {

        if (!el) return null;

        return (
            <div className="whoweare--cards">
                <img src={el.imgUrl} alt="profile" />
                <span className="whoweare--cards--name">{el.name}</span>
                <span className="whoweare--cards--position">{el.position}</span>
                <span className="desc-text">{el.text}</span>
            </div >
        )
    }

    return (
        <div className="whoweare--container">
            {Data.map(returnCard)}
        </div>
    )
};
