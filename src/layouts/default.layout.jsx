import React from "react";

//Components
import Navbar from "../components/Navbar/Navbar.component";
import HeroCarousel from "../components/Herocarousel/HeroCarousel.component";




const DefaultLayout=(props)=>{
    return(
        <>
            <Navbar/>
            <HeroCarousel/>
            {props.children}
        </>
    );
}

export default DefaultLayout;