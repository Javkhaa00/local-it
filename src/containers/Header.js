import React, { useState } from 'react';

export const Start = () => {

    const [classActive, setClass] = useState("hamburger");
    const [menuSide, setMenu] = useState("menu-side");


    return (
        <div className="header">
            <div className="header--logo">
                <img src="/assets/local-it-logo.png" alt="logo" />
            </div>
            <div
                className={classActive}
                onClick={() => {
                    if (classActive === "hamburger") {
                        setClass("change");
                        setMenu("header--nav-hidden");
                    } else {
                        setClass("hamburger");
                        setMenu("header--nav");
                    }
                }}
            >
                <div className="stick" />
                <div className="stick1" />
                <div className="stick2" />
            </div>
            <nav className={menuSide}>
                <ul>
                    <li><a>Start</a></li>
                    <li><a>The app</a></li>
                    <li><a>Who we are?</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Start;

