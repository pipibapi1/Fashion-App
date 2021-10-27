import React from "react";
import { FaSearch } from "react-icons/fa";



export default function SearchAccount() {
    return (
        <form className="searchAccount" action="/" method="get">
            <input
                className="formSearch"
                type="text"
                id="header-search"
                placeholder="Search accounts"
                name="seachAccount" 
            />
            <button className="searchButton" type="submit"><FaSearch size={20} className="searchIcon" /></button>
        </form>
        
    )
}