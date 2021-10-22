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


class App extends React.Component{
    render() {
    return (
        <div className="App">

    {/*Thanh header cua web */}

    <Header/>

    {/*Home */}
    <Home/>

    {/*2 tam banner*/}
    <Banner/>

    {/*Phan san pham */}
    <Product/>



    {/*Phan Deal*/}
    <Deal/>


    {/*Phan Feature */}
    <Feature/>


    {/*Phan review cua khach hang */}
    <Review/>

    {/*Phan Contac us*/}
    <ContactUs/>

    {/* Phan Blogs*/}
    <Blog/>

    {/* Phan Footer*/}
    <Footer/>

    </div>
     );
    }
}

export default App;

