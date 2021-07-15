import React from "react";

import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel=()=>{
    const settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"200px",
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
        <HeroSlider {...settings}>
            {images.map((image)=> (
                <div className="w-20 h-80">
                    <img src={image} alt="testing" className="w-full h-full"/>
                </div>
            )

            )}

        </HeroSlider>
        </>

    );

};

export default HeroCarousel;