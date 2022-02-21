import React from 'react'
import "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Slider1() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 80,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rows: 1,
        rtl: false,
        slide: "div",
        slidesPerRow: 3,
        
      };
    return (
        
        <div className='slider-contain' id='slider'>
        <p> WHY MEMBERS LOVE US</p>
        <span className='slider-line'></span>
        

        <Slider {...settings} className='slider-wrapper' >
      
        <div className='slider'><div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis voluptatum doloribus saepe. </h3>
            </div>
        </div>
     
        <div className='slider'>
        <div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis voluptatum doloribus saepe.</h3>
        </div></div>
        <div className='slider'><div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis voluptatum doloribus saepe.</h3>
            </div>
        </div>
        <div className='slider'>
            <h3> Maxime omnis voluptatum doloribus saepe.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        </div>
        <div className='slider'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis voluptatum doloribus saepe.</h3>
        </div>
        <div className='slider'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis voluptatum doloribus saepe.</h3>
        </div>
    </Slider>

      
        <button className='slider-button'><a href='http://google.com'>BECOME A MEMBER TODAY!</a></button>

                <a className='round-button-two' href='#lastcontent' style={{top:"680px"}}><i class="fa fa-chevron-down"></i></a>

        
        </div>
        
    )
}
