export default function Popup(props,num,trigger,setTrigger){
    return( (trigger === num )?
        <section class="product-details">
        <span class="closeIcon" id="closeIcon" onClick={()=>setTrigger(-1)}>
            <i class="fas fa-times"></i>
        </span>
        <img class="image-slider" src={props[2]}></img>
        <div class="details">
          <h2 class="product-brand">{props[1]}</h2>
          <p class="product-short-des">Lorem ipsu Misu Pelo masdo  Isnao Nasok Inasl Inask awok asmo.</p>
          <span class="product-price">{props[3]}</span>
          <span class="product-actual-price">{props[4]}</span>
          <span class="product-discount"> {props[5]}</span>

          <div class="choose-size">
            <p class="product_sub_heading">select size</p>
        
            <input type="radio" name="size" value="S" checked hidden id="s_size"/>
            <label for="s_size" class="size_radio_btn">S</label>
            <input type="radio" name="size" value="M" hidden id="m_size"/>
            <label for="m_size" class="size_radio_btn">M</label>
            <input type="radio" name="size" value="XL" hidden id="xl_size"/>
            <label for="xl_size" class="size_radio_btn">XL</label>
            <input type="radio" name="size" value="XXL" hidden id="xxl_size"/>
            <label for="xxl_size" class="size_radio_btn">XXL</label>
          </div>
          <button class="btn cart-btn">add to cart</button>
        </div>
    </section>:""
    )
}