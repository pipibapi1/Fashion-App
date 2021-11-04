import React from "react";
import './tab.css';
import Tabs from "./Tabs";
import { Container, Row, Col } from 'react-grid-system';
import Staffs from "./Staffs";
import Customers from "./Customers";
import DetailAcount from "./DetailAcount";

export default function TabAccount() {
  
    return (
        <div className="tabaccount">
            <Tabs>
                <div label="Tất cả nhân viên">
                    <Container className="showlist">
                        <Row>
                            <Col sm={6}> <h2 className="columlist">Tên tài khoản</h2></Col>
                            <Col sm={2.8}> <h2 className="columlist">Họ và tên</h2></Col>
                            <Col sm={2.2}> <h2 className="columlist">Số điện thoại</h2></Col>
                            <Col sm={1}> <h2 className="columlist">ID</h2></Col>
                        </Row>
                    </Container>
                    <DetailAcount lists={Staffs}/>
                    <div className="Total">Tổng nhân viên: {Staffs.length}</div> 
                </div>
                <div label="Tất cả khách hàng">
                    <Container className="showlist">
                        <Row>
                            <Col sm={6}> <h2 className="columlist">Tên tài khoản</h2></Col>
                            <Col sm={2.8}> <h2 className="columlist">Họ và tên</h2></Col>
                            <Col sm={2.2}> <h2 className="columlist">Số điện thoại</h2></Col>
                            <Col sm={1}> <h2 className="columlist">ID</h2></Col>
                        </Row>
                    </Container>
                    <DetailAcount lists={Customers}/>
                    <div className="Total">Tổng khách hàng: {Customers.length}</div> 
                </div>
            </Tabs>
        </div>
    
    )
}