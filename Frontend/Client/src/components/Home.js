import React from 'react'

function Home() {
    return (
        <section className="home" id="home">

    <div className="swiper home-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide slide" style={{backgroundImage : "url('image/banner1.jpg')"}}>
                <div className="content">
                    <span>upto 50% off</span>
                    <h3>women's Fashion</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

            <div className="swiper-slide slide" style={{backgroundImage : "url('image/banner2.jpg')"}}>
                <div className="content">
                    <span>upto 50% off</span>
                    <h3>men's Fashion</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

            <div className="swiper-slide slide" style={{backgroundImage : "url('image/banner3.jpg')"}}>
                <div className="content">
                    <span>upto 50% off</span>
                    <h3>kid's Fashion</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

    </div>

</section>
    )
}

export default Home
