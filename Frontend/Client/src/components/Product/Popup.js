import { useState } from "react"
export default function Popup(props,num,trigger,setTrigger){
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
  }
  const [a,setA] = useState(1);
  function searchsize(){
    if (a ==1) return "S";
    if (a ==2) return "M";
    if (a ==3) return "L";
    if (a ==4) return "XL";
  }
    return( (trigger === num )?
        <section class="product-details">
        <span class="closeIcon" id="closeIcon" onClick={()=>setTrigger(-1)}>
            <i class="fas fa-times"></i>
        </span>
        <img class="image-slider" src={props[2]}></img>
        <div class="details">
          <h2 class="product-brand">{props[1]}</h2>
          <p class="product-short-des">{props[7]}</p>
          <span class="product-price">{props[3]}</span>
          {/* <span class="product-actual-price">{props[4]}</span>
          <span class="product-discount"> {props[5]}</span> */}

          <div class="choose-size">
            <p class="product_sub_heading">select size</p>
        
            <input type="radio" name="size" value="S" checked hidden id="s_size"/>
            <label for="s_size" class={a===1?"size_radio_btn active":"size_radio_btn"} onClick={()=>setA(1)}>S</label>
            <input type="radio" name="size" value="M" hidden id="m_size"/>
            <label for="m_size" class={a===2?"size_radio_btn active":"size_radio_btn"} onClick={()=>setA(2)}>M</label>
            <input type="radio" name="size" value="XL" hidden id="xl_size"/>
            <label for="xl_size" class={a===3?"size_radio_btn active":"size_radio_btn"} onClick={()=>setA(3)}>L</label>
            <input type="radio" name="size" value="XXL" hidden id="xxl_size"/>
            <label for="xxl_size" class={a===4?"size_radio_btn active":"size_radio_btn"} onClick={()=>setA(4)}>XL</label>
          </div>
          <button class="btn cart-btn" onClick={()=>buyItem(props,searchsize())}>add to cart</button>
        </div>
    </section>:""
    )
}