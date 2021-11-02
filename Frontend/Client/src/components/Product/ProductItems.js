import React,{useState} from 'react'
import {products} from './Data.js'
import Popup from './Popup.js'

function ProductItems() {
    var index = Array.from(Array({products}.length).keys())
    const [Popple,setPopple] = useState(-1);
    return (
        <div className="box-container">
            {products.map(function(props,index){
                return(
                    <div className="box" data-item="featured">
                        <div className="icons">
                            <a href="#" className="fas fa-shopping-cart"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-search"></a>
                            <a href="#" className="fas fa-eye" onClick={()=>setPopple(index)}></a>
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
                        {Popup(props,Popple,index,setPopple)}
                    </div>
                )
            })}
        </div>
    )
}


export default ProductItems
