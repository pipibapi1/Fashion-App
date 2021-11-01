import React,{useState} from 'react'

const ImageSlider = ({props}) => {
    return(
        <div className="swiper-wrapper">
            {props.map((props)=>{
            return(
            <div className="swiper-slide slide" style={{backgroundImage: `url(${props[2]})` }}>
            <div >
                <div className="content">
                    <span>{props[3]}</span>
                    <h3>{props[1]}</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>
            </div>
            )})}
        </div>
    )
}
export default ImageSlider