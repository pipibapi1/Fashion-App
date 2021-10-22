import React from 'react'

function Blogs() {
    return (
        <div className="swiper blogs-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide slide">
                <div className="image">
                    <img src="image/blog-1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                        <a href="#"> <i className="fas fa-user"></i> by admin </a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                    <img src="image/blog-2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                        <a href="#"> <i className="fas fa-user"></i> by admin </a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                    <img src="image/blog-3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                        <a href="#"> <i className="fas fa-user"></i> by admin </a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                    <img src="image/blog-4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                        <a href="#"> <i className="fas fa-user"></i> by admin </a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="image">
                    <img src="image/blog-5.jpg" alt=""/>
                </div>
                <div className="content">
                    <h3>blog title goes here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons">
                        <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                        <a href="#"> <i className="fas fa-user"></i> by admin </a>
                    </div>
                </div>
            </div>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

    </div>
    )
}

export default Blogs
