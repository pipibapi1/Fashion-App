import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
import { VscSettingsGear } from 'react-icons/vsc';
import { FiXCircle } from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';

const options = {year: 'numeric', month: 'numeric', day: 'numeric' };


const contentStyle = {
    height: "80%",
    width: "80%",
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
                        <Col sm={5}> <h2 className="element">{account.username}</h2></Col>
                        <Col sm={3}> <h2 className="element">{account.name}</h2></Col>
                        <Col sm={2}> <h2 className="element">{account.phoneNumber}</h2></Col>
                        <Col sm={1}> <h2 className="code">{account.id}</h2></Col>
                    </Row>
                    </Container>
                }
                modal
                contentStyle = {contentStyle}
                >
                {close => (
                    <div className="modal">
                        <div className="header">Tài khoản: {account.username}</div>
                        <a className="close" onClick={close} href><FiXCircle size={20}/></a>
                        <div className="content">
                            <Container>
                                <Row>
                                    <Col lg={4.5}><img  alt="avatar" className="imagePopup" src={account.avatar}></img></Col>
                                    <Col lg={7.5}>
                                        <ul className="inform"> 
                                            <Row>
                                                <Col sm={10} className="field"> 
                                                    <div className="titleAcount">
                                                        Họ và tên: 
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {account.name}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10} className="field">
                                                    <div className="titleAcount">
                                                        Ngày sinh: 
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {new Date(account.dateOfBirth).toLocaleDateString('en-EN', options)}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10 } className="field"> 
                                                    <div className="titleAcount">
                                                        Số điện thoại:
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {account.phoneNumber}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            <Row>
                                                <Col sm={10} className="field">
                                                    <div className="titleAcount">
                                                        Email:
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {account.email}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>
                                            {account.dateWork && <Row>
                                                <Col sm={10} className="field">
                                                    <div className="titleAcount">
                                                        Ngày vào làm:
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {new Date(account.dateWork).toLocaleDateString('en-EN', options)}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>}
                                            {account.dateCreate && <Row>
                                                <Col sm={10} className="field">
                                                    <div className="titleAcount">
                                                        Ngày đăng kí tài khoản:
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcount">
                                                        {new Date(account.dateCreate).toLocaleDateString('en-EN', options)}
                                                    </div>
                                                </Col>    
                                                <Col sm={2}  className="textRight"> <AiOutlineEdit/></Col>    
                                            </Row>}
                                            <Row>
                                                <Col sm={10} className="field">
                                                    <div className="titleAcount">
                                                        Địa chỉ:
                                                    </div>
                                                    <i> </i>
                                                    <div className="valueAcountad">
                                                        {account.address}
                                                    </div>
                                                </Col>    
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


