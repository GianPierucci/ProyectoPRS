import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imagen1 from "../../assets/blackout.jpg"
import imagen2 from "../../assets/sunscreen.jpg"
import imagen3 from "../../assets/translucida.jpg"

const CarouselMobile = () => {

    return (
        <Carousel width="280px" thumbWidth="50px" interval="3000" infiniteLoop={true} dynamicHeight={true} autoPlay={true} showArrows={false} showStatus={false} showThumbs={false}>
            <div>
                <img src={imagen1} alt="imagen1"/>
            </div>
            <div>
                <img src={imagen2} alt="imagen2"/>
            </div>
            <div>
                <img src={imagen3} alt="imagen3"/>
            </div>
        </Carousel>
    );
};


export default CarouselMobile;