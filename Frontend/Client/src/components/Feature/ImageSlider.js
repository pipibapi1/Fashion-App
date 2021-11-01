import React from 'react'

const ImageSlider = ({props}) => {

    return(
        <div className="swiper-wrapper">
            {props.map((props)=>{
            return(
            <div className="swiper-slide slide">
            <div >
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src={props[2]} alt=""/>
                </div>
                <div className="content">
                    <h3>{props[1]}</h3>
                        <div className="price">
                            <div className="amount">{props[3]}</div>
                            <div className="cut">{props[4]}</div>
                            <div className="offer">{props[5]}</div>
                        </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <span>{props[6]}</span>
                        </div>
                </div>
            </div>
            </div>
            )})}
        </div>
    )
}
export default ImageSlider
