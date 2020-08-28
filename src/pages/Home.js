import React from 'react'
import Header from '../containers/Header';
import Start from '../containers/Start'
import WhoWeAre from '../containers/WhoWeAre';
import Contact from '../containers/Contact';

export const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Header />
            <Start />
            <WhoWeAre />
            <Contact />
        </div>
    )
}

export default Home;