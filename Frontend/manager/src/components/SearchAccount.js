import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";



export default function SearchAccount() {
    const [show, setshow] = useState(false);
    return (
        <form className="searchAccount" action="/" method="get">
            {show && <input
                className="formSearch"
                type="text"
                id="header-search"
                // placeholder="Search accounts"
                name="seachAccount" 
            />}
            {<div className="searchButton" onClick={() => setshow(!show)}><FaSearch size={25} className="searchIcon" /></div>}
            {/* {show && <button className="searchButton" onClick={() => setshow(true)}><FaSearch size={25} className="searchIcon" /></button>} */}
        </form>
        
    )
}