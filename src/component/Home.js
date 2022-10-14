import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import HeroSection from './HeroSection';


function Home() {

//     const data={
//         image:"./images/code.jpg",
//         name:"Eat,Sleep & Code"
//   }

const {updateHome}=useContext(AppContext);

useEffect(()=>{
    updateHome();
},[]);

    return (
        //  <HeroSection {...data}/>
         <HeroSection/>
    );
}

export default Home;