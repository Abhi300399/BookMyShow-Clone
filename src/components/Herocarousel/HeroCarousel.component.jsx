import React from "react";

import HeroSlider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows.components";


const HeroCarousel=()=>{
    const settingsLG={
        autoplay:true,
        arrows:true,
        centerMode:true,
        centerPadding:"300px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>

    }
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images=[
      "https://images.unsplash.com/photo-1612425626229-632fab8bfc02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=757&q=80",
      "https://images.unsplash.com/photo-1519033628719-72e1861f20cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
      "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
      "https://images.unsplash.com/photo-1563118490-a6fbac646b50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    ];

    return(
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {images.map((image)=> (
                <div className="w-full h-56 md:h-80 py-3">
                    <img src={image} alt="testing" className="w-full h-full"/>
                </div>
            )

            )}

        </HeroSlider>
        </div>
        <div  className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {images.map((image)=> (
                <div className="w-full h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>
            )

            )}

        </HeroSlider>
        </div>
        </>

    );

};

export default HeroCarousel;