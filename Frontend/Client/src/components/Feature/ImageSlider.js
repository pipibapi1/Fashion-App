import React,{useState} from 'react'

const ImageSlider = ({props}) => {
    return(
        <div className="swiper-wrapper">
            {props.map((data,index)=>{
            return(
            <div className="swiper-slide slide">
            <div >
                <div className="icons">
                    <a className="fas fa-shopping-cart"></a>
                    <a className="fas fa-heart active"></a>
                    <a className="fas fa-search"></a>
                    <a href="#products" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src={data[2]} alt=""/>
                </div>
                <div className="content">
                    <h3>{data[1]}</h3>
                        <div className="price">
                            <div className="amount">{data[3]}</div>
                            <div className="cut">{data[4]}</div>
                            <div className="offer">{data[5]}</div>
                        </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <span>{data[6]}</span>
                        </div>
                </div>
            </div>
            </div>
            )})}
        </div>
    )
}
export default ImageSlider
