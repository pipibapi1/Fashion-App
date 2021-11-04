import React from "react";
import './tab.css';
import { Container, Row, Col } from 'react-grid-system';
// import Popup from "reactjs-popup";
import Customers from "./Customers";
import DetailRevenue from "./DetailRevenue";

export default function TabAccount() {
  
    return (
        <div className="tabaccount">
                <div label="Tất cả nhân viên">
                    <Container className="showlist">
                        <Row>
                            <Col sm={6}> <h2 className="columlist">Tên tài khoản</h2></Col>
                            <Col sm={2.8}> <h2 className="columlist">Họ và tên</h2></Col>
                            <Col sm={2.2}> <h2 className="columlist">Số điện thoại</h2></Col>
                            <Col sm={1}> <h2 className="columlist">Đơn giá</h2></Col>
                        </Row>
                    </Container>
                    <DetailRevenue lists={Customers}/>

                    <div className="Total">Tổng doanh thu: {
                        Customers.reduce((sum, i) => (
                            sum += i.oder
                        ), 0)
                    }.000 Đ</div> 
                </div>
        </div>
    
    )
}