import React from 'react'
import ImageSlider from './ImageSlider'
import {Data} from './Data'

function Home() {
    let Fake = [
        JSON.stringify({1: "Unbranded Jacket",2: '38(EU)', 3: "image/product_img1.jpg", 4:"19.99", 5:"0:59:33", 6:"1"}),
        JSON.stringify({1: "Tory ugly Jacket",2: 'XS', 3: "image/product_img2.jpg", 4:"74.99", 5:"0:59:33", 6:"1"})
    ];
    localStorage.setItem("myOrder", JSON.stringify(Fake));
    return (
    <section className="home" id="home">
    <div className="swiper home-slider">
    <ImageSlider props={Data}/>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
    </div>

</section>
    )
}


export default Home
