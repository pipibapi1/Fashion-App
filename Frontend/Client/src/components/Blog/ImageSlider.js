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
                <div className="image">
                    <img src={props.img} alt=""/>
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.Para}</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> {props.Time} </a>
                        <a href="#"> <i className="fas fa-user"></i> by {props.User} </a>
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