import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import Popup from "reactjs-popup";
// import { VscSettingsGear } from 'react-icons/vsc';
import { FiXCircle } from 'react-icons/fi';
import DetailOrder from './DetailOrder';
// import { AiOutlineEdit } from 'react-icons/ai';
// import DetailAcount from "./DetailAcount";
import axios from "axios";

const contentStyle = {
    height: "80%",
    width: "80%",
  };
export default function DetailRevenue(props) {
    const [account, setaccount] = React.useState([]);

    React.useEffect(() => {
        axios.post("http://localhost:4000/revenue/searchAccount", {searchAcount: props.order.customerAccountId}).then((response) => {
            setaccount(response.data);
            // console.log(response.data);
        });
    }, []);
    if (!account) return null;
    // console.log(account)
    return (
        <div className="contentlist_Revenue">
            <Popup
                trigger={
                    <Container >
                    <Row className="elementlist">
                        <Col sm={2}> <h2 className="element">{props.order.id}</h2></Col>
                        <Col sm={3}> <h2 className="element">{props.order.status}</h2></Col>
                        <Col sm={5.6}> <h2 className="element">{props.order.address}</h2></Col>
                        <Col sm={1.4}> <h2 className="oderprice">{props.order.totalPrice.toLocaleString()} Đ</h2></Col>
                    </Row>
                    </Container>
                }
                modal
                contentStyle = {contentStyle}
                >
                {close => (
                    <div className="modal">
                        <div className="header">Tài khoản: {account.name }</div>
                        <a className="close" onClick={close} href><FiXCircle size={20}/></a>
                        <div className="content">
                            <div className="OrderPopUp">
                                <DetailOrder order={props.order}/>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </div> 
    )
}


