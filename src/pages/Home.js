import React from 'react'
import Header from '../containers/Header';
import Start from '../containers/Start'
import WhoWeAre from '../containers/WhoWeAre';
import Contact from '../containers/Contact';
import Why from '../containers/Why';

export const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Header />
            <Start />
            <WhoWeAre />
            <Why />
            <Contact />
        </div>
    )
}

export default Home;