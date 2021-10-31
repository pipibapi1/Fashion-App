import React,{useState} from 'react'
const products = [
    {1: "women's Fashion",2: 'image/banner1.jpg', 3: "upto 50% off"},
    {1: "men's Fashion",2: 'image/banner2.jpg', 3: "upto 50% off"},
    {1: "kid's Fashion",2: 'image/banner3.jpg', 3: "upto 50% off"}
];

function Home() {
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
        <section className="home" id="home">
    <div className="swiper home-slider">
        {products.map(function(props){index++;
            return(
                (active==index)?<div className="swiper-wrapper">
                    <div className="swiper-slide slide" style={{backgroundImage: `url(${props[2]})` }}>
                        <div className="content">
                            <span>{props[3]}</span>
                            <h3>{props[1]}</h3>
                            <a href="#" className="btn">shop now</a>
                        </div>
                    </div>
        
        
                </div>:""
            )
        })}

        <div className="swiper-button-next" onClick={a}></div>
        <div className="swiper-button-prev" onClick={b}></div>

    </div>

</section>
    )
}


export default Home
