import React,{useState} from 'react'
import {products} from './Data.js'

const Popup =(props,index) => {
    return(
        <section class="product-details">
        <div class="image-slider" style={{backgroundImage: `url(${props[2]})`}}></div>
        <div class="details">
          <h2 class="product-brand">{props[1]}</h2>
          <p class="product-short-des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores illo voluptate praesentium recusandae architecto culpa excepturi omnis rem eligendi ex natus amet eaque molestias suscipit perspiciatis.</p>
          <span class="product-price">{props[3]}</span>
          <span class="product-actual-price">{props[4]}</span>
          <span class="product-discount">( {props[5]})</span>

          <div class="choose-size">
            <p class="product_sub_heading">select size</p>
        
            <input type="radio" name="size" value="S" checked hidden id="s_size"/>
            <label for="s_size" class="size_radio_btn">S</label>
            <input type="radio" name="size" value="M" hidden id="m_size"/>
            <label for="m_size" class="size_radio_btn">M</label>
            <input type="radio" name="size" value="XL" hidden id="xl_size"/>
            <label for="xl_size" class="size_radio_btn">XL</label>
            <input type="radio" name="size" value="XXL" hidden id="xxl_size"/>
            <label for="xxl_size" class="size_radio_btn">XXL</label>
          </div>

          <button class="btn cart-btn">add to cart</button>
        </div>
    </section>
    )
}

function ProductItems() {
    return (
        <div className="box-container">
            {products.map(function(props){
                return(
                    <div className="box" data-item="featured">
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
                )
            })}
        </div>
    )
}


export default ProductItems
