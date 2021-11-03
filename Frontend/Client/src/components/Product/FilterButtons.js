import React,{useState} from 'react'

function FilterButtons() {
    const [active,setActive]=useState(1);
    return (
        <div className="filter-buttons">
        <div className={active==1?'buttons active': 'buttons'} onClick={()=>setActive(1)} data-filter="all">all</div>
        <div className={active==2?'buttons active': 'buttons'} onClick={()=>setActive(2)} data-filter="arrivals">new arrivals</div>
        <div className={active==3?'buttons active': 'buttons'} onClick={()=>setActive(3)} data-filter="featured">featured</div>
        <div className={active==4?'buttons active': 'buttons'} onClick={()=>setActive(4)} data-filter="special">special offer</div>
        <div className={active==5?'buttons active': 'buttons'} onClick={()=>setActive(5)} data-filter="seller">best seller</div>
        <div className={active==6?'buttons active': 'buttons'} onClick={()=>setActive(6)} data-filter="men">Males</div>
        <div className={active==7?'buttons active': 'buttons'} onClick={()=>setActive(7)} data-filter="female">Females</div>
        <div className={active==8?'buttons active': 'buttons'} onClick={()=>setActive(8)} data-filter="kids">Kids</div>
    </div>
    )
}

export default FilterButtons
