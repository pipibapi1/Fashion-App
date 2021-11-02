import React,{useState} from 'react'
import {Data} from './Data'

function Icons() {
    const styleObj = {
        marginLeft:0
    }
    return (
    <div>
    <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <div id="login-btn" className="fas fa-user"></div>
        <div className="shopping-card">
            {Data.map((props)=>{
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
          <h3 className="total"> TOTAL : <span>180.000VNĐ</span></h3>
          <a href="/payment" style={styleObj} className="header__menu-link btn btn--border btn--rounded buttom"> Checkout Card</a>
        </div>
        <form action="" class="login-form">
          <h3>Login Form</h3>
          <input type="email" placeholder="enter your email" class="box"></input>
          <input type="password" placeholder="enter your password" class="box"></input>
          <div class="remember">
            <input type="checkbox" name="" id="remember-me"></input>
            <label for="remember-me">remember me</label>
          </div>
          <input type="submit" value="login now" class="header__menu-link btn btn--border btn--rounded"></input>
          <p>forget password?<a href="#">click here</a></p>
          <p>don't have an account?<a href="#">create one?</a></p>
        </form>
    </div>

    </div>
    
    )
}

export default Icons