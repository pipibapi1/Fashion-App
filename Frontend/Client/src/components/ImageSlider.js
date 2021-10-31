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
            <div className="swiper-slide slide" style={{backgroundImage: `url(${props[2]})` }}>
            <div >
                <div className="content">
                    <span>{props[3]}</span>
                    <h3>{props[1]}</h3>
                    <a href="#" className="btn">shop now</a>
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