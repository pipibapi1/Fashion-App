import React from 'react'
import ImageSlider from './ImageSlider'
import {Data} from './Data'

function Home() {
    return (
        <section className="home" id="home">
    <div className="swiper home-slider">
    <ImageSlider props={Data}/>
    </div>

</section>
    )
}


export default Home
