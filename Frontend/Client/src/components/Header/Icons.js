import React,{useState} from 'react'
import {Data} from './Data'

function Icons() {
    const styleObj = {
        marginLeft:0
    }
    let X = [
      JSON.stringify({1: "Unbranded Jacket",2: '38(EU)', 3: "image/product_img1.jpg", 4:"19.99", 5:"0:59:33", 6:"1"}),
      JSON.stringify({1: "Tory ugly Jacket",2: 'XS', 3: "image/product_img2.jpg", 4:"74.99", 5:"0:59:33", 6:"1"})
    ];
    localStorage.setItem("color",JSON.stringify(X));
    return (
    <div>
    <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <a id="login-btn" href="/login" className="fas fa-user"></a>
        <div className="shopping-card">
            {JSON.parse(localStorage.getItem("myOrder")).map((item)=>{
              let props=JSON.parse(item);
                return (
          <div className="box">
            <i className="fa fa-times"></i>
            <div className="content">
              <h3>{props[1]}</h3>
              <img src={props[3]} className="Payimage" alt=""/>
              <span className="quantity">{props[6]}</span>
              <span className="multiply">X</span>
              <span className="price">${props[4]}</span>
            </div>
          </div>
            )})}
          <h3 className="total" onClick={()=>alert(JSON.parse(localStorage.getItem("color")))}> TOTAL : <span>180.000VNĐ</span></h3>
          <a href="/payment" style={styleObj} className="header__menu-link btn btn--border btn--rounded buttom"> Checkout Card</a>
        </div>
    </div>

    </div>
    
    )
}

export default Icons