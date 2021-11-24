import React,{useState,useEffect } from 'react'
import {Data} from './Data'

function Icons() {
    function switchPay(){
      if (Object.keys(JSON.parse(sessionStorage.getItem('Order'))).length===0) alert("Please choose at least 1 item")
      else  window.location = "/payment";
    }
    const styleObj = {
        marginLeft:0
    }
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
    <div>
    <div className="icons" id="here">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <a id="login-btn" href="/login" className="fas fa-user"></a>
        <div className="shopping-card">
                  <div class="scroll-object-cart">
            {count.map((item)=>{
              let props=JSON.parse(item);
                return (
          <div className="box">
            <i className="fa fa-times" onClick={()=>removeItem(props)}></i>
            <div className="content">
              <h3>{props[1]+"("+props[5]+")"}</h3>
              <img src={props[2]} className="Payimage" alt=""/>
              <span className="quantity">{props[4]}</span>
              <span className="multiply">X</span>
              <span className="price">{props[3].toLocaleString()} VND</span>
            </div>
          </div>
            )})}
                                    </div>
          <h3 className="total" onClick={()=>alert(count)}> TOTAL : <span>{total.toLocaleString()} VND</span></h3>
          <a onClick={()=>switchPay()} style={styleObj} className="header__menu-link btn btn--border btn--rounded buttom"> Checkout Card</a>
        </div>
    </div>

    </div>
    
    )
}

export default Icons