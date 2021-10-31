import React,{useState} from 'react'

const ImageSlider = ({props}) => {
    const [active,setActive]=useState(0);
    var index = -1;
    const a=()=>{
        setActive(active === index?0: active+1);
    }
    const b=()=>{
        setActive(active === 0?index: active-1);
    }
    return(
        <div className="swiper-wrapper">
            {props.map((props)=>{index++;
            return((active===index)?
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
            </div>:""
            )})}
            <div className="swiper-button-next" onClick={a}></div>
            <div className="swiper-button-prev" onClick={b}></div>
        </div>
    )
}
export default ImageSlider
