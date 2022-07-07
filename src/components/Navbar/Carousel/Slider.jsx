import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <>
            <div style={{marginTop: -18}}>
            <Carousel  showThumbs={false} >
                <div>
                    <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/homepage/Were-Hiring.jpg" />
                    
                </div>
                <div>
                    <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_US-Site/-/Sowa/en_US/homepage/NEW-STM-Holders.jpg" />
                </div>
            </Carousel>
            </div>
        </>
    )
}

export default Slider