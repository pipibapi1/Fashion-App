import React,{useState} from 'react'
import ImageSlider from './ImageSlider'

function FeaturedProducts() {
    const data = JSON.parse(sessionStorage.getItem('Data'));
    return (
    <div className="swiper featured-slider">
    <ImageSlider props={data}/>
    <div className="swiper-button-next" ></div>
    <div className="swiper-button-prev" ></div>
    </div>
    )
}

export default FeaturedProducts
