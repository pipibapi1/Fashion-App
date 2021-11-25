import { useState } from "react"
export default function Popup(props,num,trigger,setTrigger,trigger1, settrigge12){
  function buyItem(props,size){
    var x = JSON.parse(sessionStorage.getItem('Order'))
    for(const a in x){
        let com = JSON.parse(x[a])
      if (com[0] === props[0] && com[5]===size ){
        com[4]++;
        x[a] = JSON.stringify(com)
        sessionStorage.setItem('Order',JSON.stringify(x));
        return;
      }
    }
    x.push(JSON.stringify({0:props[0],1:props[1],2:props[2],3:props[3],4:1,5:size}));
    sessionStorage.setItem('Order',JSON.stringify(x));
    setTrigger(-1);
  }
    return( (trigger === num )?
        <section class="product-details">
        <span class="closeIcon" id="closeIcon" onClick={()=>setTrigger(-1)}>
            <i class="fas fa-times"></i>
        </span>
        <img class="image-slider" src={props[2]}></img>
        <div class="details">
          <h2 class="product-brand">{props[1]}</h2>
          <div class="scroll-object">
          <p class="product-short-des">{props[7]}</p>
          </div>
          <span class="product-price">PRICE: {props[3].toLocaleString()}</span>
          {/* <span class="product-actual-price">{props[4]}</span>
          <span class="product-discount"> {props[5]}</span> */}

          <div class="choose-size">
            <p class="product_sub_heading">select size</p>
            {JSON.parse(props[8]).map(function(size,index){
              return(
                <span>
                  <input type="radio" name="size" value="XL" hidden id="xl_size"/>
                  <label for="size" class={trigger1===size?"size_radio_btn active":"size_radio_btn"} onClick={()=>settrigge12(size)}>{size}</label>
                </span>
              )
            })}
          </div>
          <button class="btn cart-btn" onClick={()=>buyItem(props,trigger1)}>add to cart</button>
        </div>
    </section>:""
    )
}