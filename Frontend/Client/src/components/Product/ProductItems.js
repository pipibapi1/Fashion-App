import React,{useState} from 'react'
import {products} from './Data.js'
import axios from 'axios';
import Popup from './Popup.js'
function toggleFlag(index){
    let x = document.querySelectorAll(`.flag-${index}`)
    let a = 0;
    x.forEach(item=> {
        a ++;
        item.classList.toggle('active');
    }
    )
}
function ProductItems() {
    const [Popple,setPopple] = useState(-1);
    const data = JSON.parse(localStorage.getItem('Data'));
    return (
        <div className="box-container">
            {data.map(function(ex,index){
                let props = JSON.parse(ex);
                return(
                    <div className="box" data-item={props[6]}>
                        <div className="icons">
                            <a className="fas fa-shopping-cart"></a>
                            <a className = {`flag-${index} fas fa-heart heart`} onClick={ ()=> toggleFlag(index) }></a>
                            <a className="fas fa-eye" onClick={()=>setPopple(index)}></a>
                        </div>
                        <div className="image">
                            <img src={props[2]} alt=""/>
                        </div>
                        <div className="content">
                            <h3>{props[1]}</h3>
                            <div className="price">
                                <div className="amount">{props[3]}</div>
                                {/* <div className="cut">{props[4]}</div>
                                <div className="offer">{props[5]}</div> */}
                            </div>
                            <div className="stars" onClick={()=>alert(data)}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <span>{props[5]}</span>
                            </div>
                        </div>
                        {Popup(props,Popple,index,setPopple)}
                    </div>
                )
            })}
        </div>
    );
}


export default ProductItems
