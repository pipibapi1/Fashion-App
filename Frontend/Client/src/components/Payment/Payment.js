import React from 'react'
import {Data} from './Data'
function Calc(props){
    var total = 0;
    for (let i = 0; i < props.length; i++) {
        total += parseFloat (props[i][4]);
      }
    return Number(total.toFixed(2));;
}
function Payment() {
    return (
    <section className="payment" id="payment">
    <div className="itembox">
        <h1>Shopping card</h1>
            {Data.map((props)=>{
            return(
            <div className="Box">
                <img src={props[3]} className="Payimage" alt=""/>
                <h1 className="line">{props[1]}</h1>
                <h1 className="line">{props[2]}</h1>
                <h1 className="line">${props[4]}</h1>
                <h1 className="line">{props[5]}</h1>
                <div className="blank"></div>
            </div>
            )})}
    </div>
    <div className="itembox">
        <h1>Order Summary</h1>
        <h1>Subtotal <a className="line2">$94.98</a></h1>
        <h1>Shipping <a className="line2">Free</a></h1>
        <h1>Total <a className="line2">${Calc(Data)}</a></h1>
    </div>
    <div className="blank"></div>
    </section>
    )
}


export default Payment