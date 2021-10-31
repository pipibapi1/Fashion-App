import React from 'react';
import Banner from './components/Banner';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import Deal from './components/Deal';
import Feature from './components/Feature';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Footer from './components/Footer';

const Mainpage = () =>{
    return (
    <div className = "App">
        <Header/>
        <Home/>
        <Banner/>
        <Product/>
        <Deal/>
        <Feature/>
        <Review/>
        <ContactUs/>
        <Blog/>
        <Footer/>
    </div>
     );
     
}

export default Mainpage;