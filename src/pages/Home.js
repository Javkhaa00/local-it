import React, { useEffect } from 'react'
import { scroller } from "react-scroll";
import Start from '../containers/Start'
import WhoWeAre from '../containers/WhoWeAre';
import Contact from '../containers/Contact';
import Why from '../containers/Why';
import Local from '../containers/Local';
import TheApp from '../containers/TheApp';
import Footer from '../containers/Footer';

export const Home = (props) => {

    console.log(props);

    const { search } = props.location;
    useEffect(() => {
        const section = search.split("=")[1];
        scroller.scrollTo(section || "firstpage-section", {
            duration: 500,
            smooth: true,
            offset: 50,
        });
    }, [search]);

    return (
        <div style={{ overflow: "hidden"}}>
            <Start />
            <TheApp />
            <WhoWeAre />
            <Why />
            <Local />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;