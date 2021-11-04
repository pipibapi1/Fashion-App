import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
import { VscSettingsGear } from 'react-icons/vsc';
import { FiXCircle } from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';
const contentStyle = {
    height: "70%",
    width: "70%",
  };
export default function DetailAcount(props) {
    return (
        <div className="contentlist">
            {props.lists.map(account => (
            <Popup
                trigger={
                    <Container >
                    <Row className="elementlist">
                        <Col sm={1}> <img  alt="avatar" className="image" src={account.avatar}></img></Col>
                        {/* <a href="https://www.facebook.com/?ref=tn_tnmn" target="_parent">nội dung đại diện cho cái liên kết</a> */}
                        <Col sm={5}> <h2 className="element">{account.name}</h2></Col>
                        <Col sm={3}> <h2 className="element">{account.fullname}</h2></Col>
                        <Col sm={2}> <h2 className="element">{account.phone}</h2></Col>
                        <Col sm={1}> <h2 className="code">{account.code}</h2></Col>
                    </Row>
                    </Container>
                }
                modal
                contentStyle = {contentStyle}
                >
                {close => (
                    <div className="modal">
                        <div className="header">Tài khoản: {account.name}</div>
                        <a className="close" onClick={close} href><FiXCircle size={20}/></a>
                        <div className="content">
                            <Container>
                                <Row>
                                    <Col lg={5}><img  alt="avatar" className="imagePopup" src={account.avatar}></img></Col>
                                    <Col lg={7}>
                                        <ul className="inform"> 
                                            <Row>
                                                <Col sm={10} className="field"> Họ và tên: {account.name}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Ngày sinh: {account.date}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Tuổi: {account.age}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Số điện thoại: {account.phonenumber}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Email: {account.email}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Ngày tạo Account: {account.dateWork}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10}> Địa chỉ: {account.address}.</Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="iconSetting">
                                <VscSettingsGear size={30}/>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
            ))}
        </div> 
    )
}


