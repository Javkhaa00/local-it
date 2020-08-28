import React from 'react'
import Header from '../containers/Header';
import Start from '../containers/Start'
import WhoWeAre from '../containers/WhoWeAre';
import Contact from '../containers/Contact';
import Why from '../containers/Why';
import Local from '../containers/Local';
import TheApp from '../containers/TheApp';

export const Home = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <Start />
            <TheApp />
            <WhoWeAre />
            <Why />
            <Local />
            <Contact />
        </div>
    )
}

export default Home;