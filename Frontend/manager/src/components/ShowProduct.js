import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import axios from "axios";

export default function ShowProduct(props) {
    const [product, setproduct] = React.useState([]);
    // console.log("hihi", props.item.productID)
    // React.useEffect(() => {
    //         axios.post("http://localhost:4000/revenue/searchProduct", {searchProduct: props.item.productID}).then((response) => {
    //             setproduct(response.data)
    //             console.log(response.data);
    //         });
    // }, []);
    React.useEffect(() => {     
            const getData = async () => {  
            await axios.post("http://localhost:3000/revenue/searchProduct", {searchProduct: props.item.productID}).then((response) => {
                setproduct(response.data)
                // console.log(response.data);
            });
            }  
            getData();
    }, []);
    if (!product) return null;

    return (
            <Container fluid>
                <Row>
                    <Col lg={4.5}><img className="imageOrder" src={product.img} alt="ProductImage"></img></Col>
                    <Col lg={7.5} className="contentOrder">
                        <div className="nameOrder">{product.name}</div>
                        {/* <div className="nameOrder">{product.id}</div> */}
                        <div>{product.description}</div>
                        <div>SIZE {props.item.size}</div>
                        <div className="quantityOrder">Số lượng: { props.order.listQuantity[props.indexx]}</div>
                        {product.price && <div className="textRight">GIÁ: {product.price.toLocaleString()} VNĐ</div>}
                    </Col>
                </Row>
            </Container>
    )
}