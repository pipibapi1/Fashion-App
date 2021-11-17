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
    function buyItem(props){
        var x = JSON.parse(localStorage.getItem('Order'))
        for(const a in x){
            let com = JSON.parse(x[a])
          if (com[0] === props[0]){
            com[4]++;
            x[a] = JSON.stringify(com)
            localStorage.setItem('Order',JSON.stringify(x));
            return;
          }
        }
        x.push(JSON.stringify({0:props[0],1:props[1],2:props[2],3:props[3],4:1}));
        localStorage.setItem('Order',JSON.stringify(x));  
    }
    const [Popple,setPopple] = useState(-1);
    return (
        <div className="box-container">
            {JSON.parse(localStorage.getItem('Data')).map(function(ex,index){
                let props = JSON.parse(ex);
                return(
                    <div className="box" data-item={props[6]}>
                        <div className="icons">
                            <a className="fas fa-shopping-cart" onClick={()=>buyItem(props)}></a>
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
                            <div className="stars">
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
