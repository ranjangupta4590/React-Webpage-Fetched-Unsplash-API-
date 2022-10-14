import React, { useContext,useEffect } from 'react';
import { AppContext } from '../context';
import HeroSection from './HeroSection';

function About(props) {
    // const data={
    //       image:"./images/mobile.jpg",
    //       name:"About Us"
    // }

    const { updateAbout } = useContext(AppContext);

    useEffect(() => {
        updateAbout();
    },[]);

    return (
        // <HeroSection {...data} />
        <HeroSection />
    );
}

export default About;