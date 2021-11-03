import React from "react";
import './tab.css';
import Tabs from "./Tabs";
import { Container, Row, Col } from 'react-grid-system';


const Staffs = [
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 1,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 3,
        "name": "Log1223",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MB102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 3,
        "name": "Hello",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MQ102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 4,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 5,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1600273371_670_Tong-hop-hinh-anh-Girl-xinh-Au-%E2%80%93-My-dep.jpg",
        "code": "MA102",
        "fullname": "Nguyen Nguyen Lorem"
    }
]
const Customers = [
    {
        "id": 1,
        "name": "Long123",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MA103",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 2,
        "name": "Hoang123",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MA106",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 3,
        "name": "Log1223",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MB102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 3,
        "name": "Hello",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MQ102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 4,
        "name": "Tom123",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MA102",
        "fullname": "Nguyen Nguyen Lorem"
    },
    {
        "id": 5,
        "name": "MYBK123",
        "phone": "0123456789",
        "avatar": "https://lh4.googleusercontent.com/WSGZnJHFeJPasjNCsH0GlDlfgN85em5PmDR_MRw5lQxz58esADMU7l3qP6Rq-83VIB8-vuv3eaMKCgDsbqTZMBnL1g3DrHlmxXAM4mnq8oXApXe5xDjQVgbt7hzllN1_RqPadVOSgkkDEPq5XQ",
        "code": "MA102",
        "fullname": "Nguyen Nguyen Lorem"
    }
]

export default function TabAccount() {
  
    return (
        <div className="tabaccount">
            <Tabs>
                <div label="Tất cả nhân viên">
                    <Container className="showlist">
                        <Row>
                            <Col sm={6}> <h2 className="columlist">Tên tài khoản</h2></Col>
                            <Col sm={3}> <h2 className="columlist">Họ và tên</h2></Col>
                            <Col sm={2}> <h2 className="columlist">Số điện thoại</h2></Col>
                            <Col sm={1}> <h2 className="columlist">ID</h2></Col>
                        </Row>
                    </Container>
                    <div className="columlist">
                        {Staffs.map(staff => (
                            <Container className="elementlist">
                            <Row>
                                <Col sm={1}> <img  alt="avatar" className="image" src={staff.avatar}></img></Col>
                                <Col sm={5}> <h2 className="element">{staff.name}</h2></Col>
                                <Col sm={3}> <h2 className="element">{staff.fullname}</h2></Col>
                                <Col sm={2}> <h2 className="element">{staff.phone}</h2></Col>
                                <Col sm={1}> <h2 className="code">{staff.code}</h2></Col>
                            </Row>
                        </Container>
                        ))}
                    </div>       
                </div>
                <div label="Tất cả khách hàng">
                    <Container className="showlist">
                        <Row>
                            <Col sm={6}> <h2 className="columlist">Tên tài khoản</h2></Col>
                            <Col sm={3}> <h2 className="columlist">Họ và tên</h2></Col>
                            <Col sm={2}> <h2 className="columlist">Số điện thoại</h2></Col>
                            <Col sm={1}> <h2 className="columlist">ID</h2></Col>
                        </Row>
                    </Container>
                    <div className="columlist">
                        {Customers.map(customer => (
                            <Container className="elementlist">
                            <Row>
                                <Col sm={1}> <img alt="avatar" className="image" src={customer.avatar}></img></Col>
                                <Col sm={5}> <h2 className="element">{customer.name}</h2></Col>
                                <Col sm={3}> <h2 className="element">{customer.fullname}</h2></Col>
                                <Col sm={2}> <h2 className="element">{customer.phone}</h2></Col>
                                <Col sm={1}> <h2 className="code">{customer.code}</h2></Col>
                            </Row>
                        </Container>
                        ))}
                    </div> 
                </div>
            </Tabs>
        </div>
    
    )
}