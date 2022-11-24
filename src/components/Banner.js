import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Banner() {
  return (
    <div>

       <Carousel
       autoPlay
       infiniteLoop
       // showArrows={false}
       showIndicators={false}
       showThumbs={false}
       interval={3000}
       
       >
        <div>
            <img src="image2.jpg" alt="" />
        </div>
        <div>
            <img src="image11.jpg" alt="" />
        </div>
        <div>
            <img src="image31.jpg" alt="" />
        </div>



       </Carousel>

    </div>
  )
}

export default Banner