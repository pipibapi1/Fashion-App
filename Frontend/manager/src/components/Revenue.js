import React, { useState } from 'react';
import './tab.css';
import { Container, Row, Col } from 'react-grid-system';
// import Popup from "reactjs-popup";
// import Customers from "./Customers";
import DetailRevenue from "./DetailRevenue";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import useMountTransition from "./useMountTransition";

export default function Revenue() {
    // const [Staffs, setStaff] = React.useState(null);
    const renderSwitch = (search, current) => {
        switch(search) {
            case 2:
                return result.filter(data => data.status.includes(current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
            case 3:
                return result.filter(data => data.address.includes(current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
            default:
                return result.filter(data => data.id.includes(current)).map(order => (
                    <DetailRevenue order={order}/>
                ))
          }
    }
    const choices = [
        {
            id: 1,
            name: "Mã đơn hàng"
        },
        {
            id: 2,
            name: "Trạng thái"
        },
        {
            id: 3,
            name: "Địa chỉ"
        }
    ]
    const [Orders, setOrder] = React.useState([]);
    const [show, setshow] = useState(false);
    const [current, setCurrent] = React.useState("");
    const [checked, setChecked] = React.useState(-1);
    const hasTransitionedIn = useMountTransition(show, 1000);
    React.useEffect(() => {
        axios.get("http://localhost:3000/revenue/order").then((response) => {
            setOrder(response.data);
            // console.log(response.data);
        });
    }, []);
    if (!Orders) return null;
    let result = [...Orders];
    if(result[1]) console.log("arayy",result[1].id);

    return (
        <>
        {(hasTransitionedIn || show) && <div className="tableChoice">
            {choices.map(choice => (
                <i className={`choice ${hasTransitionedIn && "in"} ${
                    show && "visible"}`} key={choice.id}>
                    <input 
                        type="radio" 
                        onChange={() => setChecked(choice.id)}
                        checked={choice.id === checked}
                    />
                        {choice.name}
                        
                </i>
            ))}
        </div>}
        <form className="searchAccount" action="/" method="get">
            {(hasTransitionedIn || show) && <input
                className={`formSearch ${hasTransitionedIn && "in"} ${show && "visible"}`}
                value={current}
                type="text"
                id="header-search"
                onChange={e => setCurrent(e.target.value)}
                // placeholder="Search Id"
                name="seachAccount" 
                />}
            
            {<div className="searchButton" onClick={() => setshow(!show)}><FaSearch size={25} className="searchIcon" /></div>}
            {/* {show && <button className="searchButton" onClick={() => setshow(true)}><FaSearch size={25} className="searchIcon" /></button>} */}
        </form>
        <div className="tabaccount">
                <div label="Tất cả nhân viên">
                    <Container className="showlist" fluid>
                        <Row>
                            <Col sm={2}> <h2 className="columlist">Mã đơn hàng</h2></Col>
                            <Col sm={4}> <h2 className="columlist">Trạng thái</h2></Col>
                            <Col sm={4.8}> <h2 className="columlist">Địa chỉ</h2></Col>
                            <Col sm={1.2}> <h2 className="columlist">Đơn giá</h2></Col>
                        </Row>
                    </Container>
                    <div className="contentlist_Revenue">
                        {renderSwitch(checked, current)}
                    </div>
                    <div className="Total">Tổng doanh thu: {
                        Orders.reduce((sum, i) => (
                            sum += i.status === 'Đã Giao' ? i.totalPrice : 0
                        ), 0).toLocaleString()
                    } VNĐ</div> 
                </div>
        </div>
        </>
    )
}