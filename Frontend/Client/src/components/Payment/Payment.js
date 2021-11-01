import React from 'react'
import {Data,Shipping} from './Data'
function Calc(props){
    var total = 0;
    for (let i = 0; i < props.length; i++) {
        total += parseFloat (props[i][4]);
      }
    return Number(total.toFixed(2));;
}
function Payment() {
    return (
    <section class="cart">
    <div class="cart_left">
        <div class="row">
            <span class="rowTitle">Shopping cart</span>
        </div>
        {Data.map((props)=>{
            return (
        <div class="cart_items">
            <img src={props[3]} className="Payimage" alt=""/>
            <div class="cart_items_details">
                <div class="cart_items_details-top">
                    <span class="items_name">{props[1]}</span>
                    <span class="closeIcon" id="closeIcon">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <span class="cart_items_details-size">Size: {props[2]}</span>
                <div class="cart_items_details-bottom">
                    <span class="cart_items_details-price">${props[4]}</span>
                    <div class="controls">
                        <span class="minusIcon">-</span>
                        <span class="count" id="count">{props[6]}</span>
                        <span class="plusIcon">+</span>
                    </div>
                </div>
            </div>
        </div>)})}
    <div class="cartPromoDiv">
            <form>
            <input type="text" id="fname" name="fname"  placeholder="Promo code"/>
            </form>
            <span class="cta">Apply</span>
        </div>
    </div>
    <div class="cart_right">
        <div class="row1">
            <span class="rowTitle">Shopping cart</span>
        </div>
        <div class="row">
            <span class="rowTitle">Sub total</span>
            <span class="rowAmount">${Calc(Data)}</span>
        </div>
        <div class="row">
            <span class="rowTitle">Shipping</span>
            <span class="rowAmount">${Shipping}</span>
        </div>
        <div class="row2">
            <span class="rowTitle">Total</span>
            <span class="rowAmount">${Calc(Data)+Shipping}</span>
        </div>
        <div class="btn">
            <button type="button">Checkout</button>
        </div>
    </div>
</section>
    )
}



export default Payment