import React from 'react';
import Mainpage from './Mainpage.js'
import SearchPage from './SearchPage.js'
import PaymentPage from './PaymentPage.js'
import OrderPage from './ListOrder.js'
import { BrowserRouter as Router ,Route } from 'react-router-dom';

const App = () =>{
    return (
    <Router>
        <Route exact path="/" component={Mainpage}/>
        <Route exact path="/searchResult" component={SearchPage}/>
        <Route exact path="/payment" component={PaymentPage}/>
        <Route exact path="/myorder" component={OrderPage}/>
    </Router>
     );
     
}

export default App;

