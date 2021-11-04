import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
// import { VscSettingsGear } from 'react-icons/vsc';
import { FiXCircle } from 'react-icons/fi';
import DetailOrder from './DetailOrder';
// import { AiOutlineEdit } from 'react-icons/ai';
// import DetailAcount from "./DetailAcount";

const contentStyle = {
    height: "70%",
    width: "70%",
  };
export default function DetailRevenue(props) {
    return (
        <div className="contentlist_Revenue">
            {props.lists.map(account => (
            <Popup
                trigger={
                    <Container >
                    <Row className="elementlist">
                        <Col sm={1}> <img  alt="avatar" className="image" src={account.avatar}></img></Col>
                        <Col sm={5}> <h2 className="element">{account.name}</h2></Col>
                        <Col sm={3}> <h2 className="element">{account.fullname}</h2></Col>
                        <Col sm={2}> <h2 className="element">{account.phone}</h2></Col>
                        <Col sm={1}> <h2 className="oderprice">{account.oder}.000 Đ</h2></Col>
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
                            <div className="OrderPopUp">
                                <DetailOrder account={account}/>
                                <DetailOrder account={account}/>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
            ))}
        </div> 
    )
}


