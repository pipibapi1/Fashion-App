import React from 'react'

import Sidebar from './Sidebar/Sidebar';
import DonHang from './Pages/DonHang/DonHang';
import TTCN from './Pages/TTCN/TTCN';
import Welcome from './Pages/Welcome/Welcome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';






function DashBoard() {
 
    return (
        <Router >
         
        <Switch >
            <Route path={'/Dashboard'}>
            <Sidebar/>
                <Welcome/>
            </Route>

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

export default DashBoard
