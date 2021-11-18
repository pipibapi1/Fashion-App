import React from 'react';
import './tab.css';
import Tabs from "./Tabs";
import { Container, Row, Col } from 'react-grid-system';
// import Staffs from "./Staffs";
// import Customers from "./Customers";
import DetailAcount from "./DetailAcount";
import axios from "axios";
// import SearchAccount from "./SearchAccount";
// import { FaSearch } from "react-icons/fa";


export default function TabAccount() {

    const [Staffs, setStaff] = React.useState(null);
    const [Customers, setCustomer] = React.useState(null);

    // const [show, setshow] = useState(false);
    // const [current, setCurrent] = React.useState("");

    React.useEffect(() => {
        axios.get("http://localhost:3000/detail/Clerk").then((response) => {
        setStaff(response.data);
        });
        axios.get("http://localhost:3000/detail/Customer").then((response) => {
        setCustomer(response.data);
        });
    }, []);
    if (!Staffs) return null;

    return (
        <>
        {/* <form className="searchAccount" action="/" method="get">
            {show && <input
                className="formSearch"
                type="text"
                id="header-search"
                // placeholder="Search accounts"
                name="seachAccount" 
            />}
            {<div className="searchButton" onClick={() => setshow(!show)}><FaSearch size={25} className="searchIcon" /></div>} */}
            {/* {show && <button className="searchButton" onClick={() => setshow(true)}><FaSearch size={25} className="searchIcon" /></button>} */}
        {/* </form> */}
        {/* <SearchAccount /> */}
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
                    {Staffs && <div className="Total">Tổng nhân viên: {Staffs.length}</div>}
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
                    { Customers && <div className="Total">Tổng khách hàng: {Customers.length}</div>} 
                </div>
            </Tabs>
        </div>
    </>
    )
}