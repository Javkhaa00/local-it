import React from 'react';

const TheApp = () => {
    return (
        <div className="app">
            <span className="title" style={{ paddingBottom: "24px" }}>The App</span>
            <div className="app--carousel">
                <div>
                    <img src="/assets/layer1.png" alt="pic1" />
                </div>
                <div>
                    <img src="/assets/layer2.png" alt="pic1" />
                </div>
                <div>
                    <img src="/assets/layer3.png" alt="pic1" />
                </div>
            </div>
            <span className="app--carousel--title">Features 1</span>
            <span className="app--carousel--text">
                Save time sifting through pages when you use LocalIT- all and only small businesses finally in only
            </span>
            <div className="app--circle1" />
            <div className="app--circle2" />
            <div className="app--circle3" />
        </div>
    )
}

export default TheApp;