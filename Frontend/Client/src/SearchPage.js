import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Footer from './components/Footer';

const SearchPage = () =>{
    return (
    <div className = "App">
        <Header/>
        <Product/>
        <ContactUs/>
        <Blog/>
        <Footer/>
    </div>
     );
     
}

export default SearchPage;