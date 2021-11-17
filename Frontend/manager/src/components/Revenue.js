import React from "react";
import './tab.css';
import { Container, Row, Col } from 'react-grid-system';
// import Popup from "reactjs-popup";
// import Customers from "./Customers";
import DetailRevenue from "./DetailRevenue";
import axios from "axios";

export default function Revenue() {
    // const [Staffs, setStaff] = React.useState(null);
    const [Orders, setOrder] = React.useState([]);

    React.useEffect(() => {
        // axios.get("http://localhost:4000/revenue").then((response) => {
        // setStaff(response.data);
        // });

        axios.get("http://localhost:4000/revenue/order").then((response) => {
            setOrder(response.data);
            // console.log(response.data);
        });
    }, []);
    if (!Orders) return null;
    // console.log(Orders)
    // Orders.map(oder => (
    //     axios.post("http://localhost:4000/revenue/test", {searchAcount: oder.customerAccountId}).then((response) => {
    //         // setOrder(response.data);
    //         console.log("1", response);
    //     })
    // ))
    // console.log(Orders);

    return (
        <div className="tabaccount">
                <div label="Tất cả nhân viên">
                    <Container className="showlist">
                        <Row>
                            <Col sm={2}> <h2 className="columlist">Mã đơn hàng</h2></Col>
                            <Col sm={3}> <h2 className="columlist">Trạng thái</h2></Col>
                            <Col sm={5.8}> <h2 className="columlist">Địa chỉ</h2></Col>
                            <Col sm={1.2}> <h2 className="columlist">Đơn giá</h2></Col>
                        </Row>
                    </Container>
                    {Orders.map(order => (
                        <DetailRevenue order={order}/>
                    ))}

                    <div className="Total">Tổng doanh thu: {
                        Orders.reduce((sum, i) => (
                            sum += i.totalPrice
                        ), 0).toLocaleString()
                    } Đ</div> 
                </div>
        </div>
    
    )
}