import React from "react";
import { Container, Row, Col } from 'react-grid-system';

export default function DetailOrder(props) {
    return (
        <Container>
            <Row>
                <Col lg={4.5}><img className="imageOrder" src={props.account.jean_image} alt="jean"></img></Col>
                <Col lg={7.5} className="contentOrder">
                    <div className="nameOrder">Quần Jean siêu chất</div>
                    <div>TRẮNG ĐEN / {props.account.jean}</div>
                    <div>SIZE L</div>
                    <div className="quantityOrder">Số lượng: 1</div>
                    <div className="textRight">TỔNG: 500.000</div>
                </Col>
            </Row>
        </Container>
    )
}