import React,{useState} from 'react'
const products = [
    {1: "blog title goes here",2: 'image/blog-1.jpg', 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.", 4:"21st may, 2021", 5:"admin"},
    {1: "blog title goes here",2: 'image/blog-2.jpg', 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.", 4:"21st may, 2021", 5:"admin"},
    {1: "blog title goes here",2: 'image/blog-3.jpg', 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.", 4:"21st may, 2021", 5:"admin"},
    {1: "blog title goes here",2: 'image/blog-4.jpg', 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.", 4:"21st may, 2021", 5:"admin"},
    {1: "blog title goes here",2: 'image/blog-5.jpg', 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.", 4:"21st may, 2021", 5:"admin"}
];

function Blogs() {
    var index = -1;
    var current = 0;
    const a=()=>{
        if(current==index) {current=0;}
        else {current++;}
        setActive(current);
    }
    const b=()=>{
        if(current==0) {current=index;}
        else {current--;}
        setActive(current);
    }
    const [active,setActive]=useState(0);
    return (
        <div className="swiper blogs-slider">

        <div className="swiper-wrapper">
            {products.map(function(props){index++;
            return((active==index)?<div className="swiper-slide slide">
                <div className="image">
                    <img src={props[2]} alt=""/>
                </div>
                <div className="content">
                    <h3>{props[1]}</h3>
                    <p>{props[3]}</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> {props[4]} </a>
                        <a href="#"> <i className="fas fa-user"></i> by {props[5]} </a>
                    </div>
                </div>
            </div>:""
            )})}

        </div>

        <div className="swiper-button-next" onClick={a}></div>
        <div className="swiper-button-prev" onClick={b}></div>

    </div>
    )
}

export default Blogs
