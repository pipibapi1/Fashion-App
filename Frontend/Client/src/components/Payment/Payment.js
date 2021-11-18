import React,{useState,useEffect} from 'react'
import {Data,Shipping} from './Data'

function Payment() {
    const [count, setCount] = useState(JSON.parse(sessionStorage.getItem("Order")));
    const [total, setTotal] = useState(0);
    function calcTotal(){
        var x = JSON.parse(sessionStorage.getItem('Order'))
        var y = 0;
        for(const a in x){
            let com = JSON.parse(x[a])
          y += com[3]*com[4];
        }
        setTotal(y);
      }
      useEffect(() => {
        setTimeout(() => {
          setCount(JSON.parse(sessionStorage.getItem("Order")));
        }, 1000);
      });
      useEffect(() => {
        setTimeout(() => {
          calcTotal();
        }, 1000);
      });
      function removeItem(props){
        var x = JSON.parse(sessionStorage.getItem('Order'))
        for(const a in x){
            let com = JSON.parse(x[a])
          if (com[0] === props[0]){
            x.splice(a,1);
            sessionStorage.setItem('Order',JSON.stringify(x));
            return;
          }
        }
        return;
      }
    return (
    <section class="cart">
    <div class="cart_left">
        <div class="row">
            <span class="rowTitle">Shopping cart</span>
        </div>
        {count.map((item)=>{
            let props=JSON.parse(item);
            return (
        <div class="cart_items">
            <img src={props[2]} alt=""/>
            <div class="cart_items_details">
                <div class="cart_items_details-top">
                    <span class="items_name">{props[1]}</span>
                    <span class="closeIcon" id="closeIcon">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
                <span class="cart_items_details-size">Size: {"XL"}</span>
                <div class="cart_items_details-bottom">
                    <span class="cart_items_details-price">${props[3]}</span>
                    <div class="controls">
                        <button class="minusIcon" type="button">-</button>
                        <span class="count" id="count">{props[4]}</span>
                        <button class="plusIcon"  type="button">+</button>
                    </div>
                </div>
            </div>
        </div>)})}
    <div class="cartPromoDiv">
            <form>
            <input type="text" id="fname" name="fname"  placeholder="Promo code"/>
            </form>
            <button class="cta" type="button">Apply</button>
        </div>
    </div>
    <div class="cart_right">
        <div class="row1">
            <span class="rowTitle">Shopping cart</span>
        </div>
        <div class="row">
            <span class="rowTitle">Sub total</span>
            <span class="rowAmount">${total}</span>
        </div>
        <div class="row">
            <span class="rowTitle">Shipping</span>
            <span class="rowAmount">${20}</span>
        </div>
        <div class="row2">
            <span class="rowTitle">Total</span>
            <span class="rowAmount">${total+20}</span>
        </div>
        <div class="btn">
            <button type="button">Checkout</button>
        </div>
    </div>
</section>
    )
}



export default Payment