import React,{useState} from 'react'
import ImageSlider from './ImageSlider'
import {Data} from './Data'

function FeaturedProducts() {
    return (
    <div className="swiper featured-slider">
    <ImageSlider props={Data}/>
    <div className="swiper-button-next" ></div>
    <div className="swiper-button-prev" ></div>
    </div>
    )
}

export default FeaturedProducts