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
import axios from 'axios';
const Mainpage = () =>{
    try {
        const localData = [];
        const response = axios.get("http://localhost:3000/product").then(
            (res) => {
                for(const x in res.data.products)
                    localData.push(JSON.stringify({"0":res.data.products[x]['id'],"1":res.data.products[x]['name'],"2":res.data.products[x]['img'],"3":res.data.products[x]['price'],"5":"(50)","6":res.data.products[x]['feature'],"7":res.data.products[x]['description']}));
                sessionStorage.setItem('Data',JSON.stringify(localData));
                sessionStorage.setItem('Order',JSON.stringify([]));
            });
      } catch (error) {
        console.log(error);
    }
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