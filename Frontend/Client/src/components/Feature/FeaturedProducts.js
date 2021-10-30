import React,{useState} from 'react'
const products = [
    {1: "product name",2: "image/product_img1.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"},
    {1: "product name",2: "image/product_img2.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"},
    {1: "product name",2: "image/product_img3.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"},
    {1: "product name",2: "image/product_img4.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"},
    {1: "product name",2: "image/product_img5.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"},
    {1: "product name",2: "image/product_img6.jpg", 3: "$20.00", 4: "$25.00", 5: "20% off", 6: "(50)"}
];

function FeaturedProducts() {
    var index = -1;
    var current = 0;
    const a=()=>{
        if(current==index) {current=-1;}
        current++;
        setActive(current);
    }
    const b=()=>{
        if(current==0) {current=6;}
        current--;
        setActive(current);
    }
    const [active,setActive]=useState(0);
    return (
        <div className="swiper featured-slider">
        {products.map(function(props){index++;
                return(
                    (active==index)?<div className="swiper-wrapper">
                        <div className="swiper-slide slide">
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
                    )
                
            })}
        <div className="swiper-button-next" onClick={a}></div>
        <div className="swiper-button-prev" onClick={b}></div>

    </div>
    )
}

export default FeaturedProducts