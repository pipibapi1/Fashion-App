
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ClerkLogin from './components/ClerkLogin/ClerkLogin';
import React, {Redirect} from 'react';
import DashBoard from './components/DashBoard';
import createHistory from 'history/createBrowserHistory';
import Sidebar from './components/Sidebar/Sidebar';
import DonHang from './components/Pages/DonHang/DonHang';
import TTCN from './components/Pages/TTCN/TTCN';


const history = createHistory();



function App() {

  return (
    
   <Router history={history}>
       <Switch>
           <Route exact path="/" exact component={ClerkLogin} />
           <Route exact path="/DashBoard" component={DashBoard } />
           <Route path={'/Đơn Hàng'}>
            <Sidebar/>
                <DonHang/>
            </Route>

            <Route path={'/Thông Tin Cá Nhân'}>
            <Sidebar/>
                <TTCN/>
            </Route>
       </Switch>
   </Router>

  )
}

export default App;
