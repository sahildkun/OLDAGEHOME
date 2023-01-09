import React from 'react'
import Slider from "react-slick";
import img1 from '../images/photo_2023-01-09_11-43-08.jpg'
import img2 from '../images/photo_2023-01-09_22-48-01.jpg'
import img3 from '../images/photo_2023-01-09_23-13-37.jpg'
import img4 from '../images/photo_2023-01-09_23-13-43.jpg'
import img5 from '../images/photo_2023-01-09_11-43-06.jpg'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slides.css'
const Slides = () => {
  const settings = {
    infinite: 1,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
          breakpoint: 1400,
          settings:{
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 1000,
          settings:{
              slidesToShow: 1,
          }
      }
  ]                                                                                                                                      
  };
  return (
    <div className=' '>
      <Slider {...settings} >
       
      <div>
        <img src={img2} alt="yoga" className='' />
      </div>
      <div>
      <img src={img1} alt="yoga" />
        
      </div>
      <div>
      <img src={img3} alt="yoga" />
      </div>
     
      <div>
      <img src={img4} alt="yoga" className='' />
       
      </div>
      <div>
      <img src={img5} alt="yoga" className='' />
       
      </div>
      <div>
      <img src={img1} alt="yoga" className='' />
       
      </div>
    </Slider>
      </div>
  )
}

export default Slides