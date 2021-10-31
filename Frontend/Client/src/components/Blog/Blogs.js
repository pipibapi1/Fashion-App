import React,{useState} from 'react'
import ImageSlider from './ImageSlider'
import {Data} from './Data'
function Blogs() {
    return (
        <div className="swiper blogs-slider">
        <ImageSlider props={Data}/>


    </div>
    )
}
export default Blogs
