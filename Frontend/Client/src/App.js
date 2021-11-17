import React from 'react';
import Mainpage from './Mainpage.js'
import SearchPage from './SearchPage.js'
import PaymentPage from './PaymentPage.js'
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import axios from 'axios';
const App = () =>{
    try {
        const localData = [];
        const response = axios.get("http://localhost:3000/product").then(
            (res) => {
                for(const x in res.data.products)
                    localData.push(JSON.stringify({"1":res.data.products[x]['name'],"2":res.data.products[x]['img'],"3":res.data.products[x]['price'],"5":"(50)","6":res.data.products[x]['feature']}));
                localStorage.setItem('Data',JSON.stringify(localData));
            });
      } catch (error) {
        console.log(error);
    }
    return (
    <Router>
        <Route exact path="/" component={Mainpage}/>
        <Route exact path="/login" component={SearchPage}/>
        <Route exact path="/payment" component={PaymentPage}/>
    </Router>
     );
     
}

export default App;

