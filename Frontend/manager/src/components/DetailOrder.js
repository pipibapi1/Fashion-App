import React from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-grid-system';
import ShowProduct from "./ShowProduct";

export default function DetailOrder(props) {
    const [items, setitems] = React.useState([]);
    React.useEffect(() => {
        // console.log("hihi", props.order.listItemID)
        if(items.length < props.order.listItemID.length) props.order.listItemID.map(item => {
            axios.post("http://localhost:3000/revenue/searchItem", {searchItem: item}).then((response) => {
                setitems([...items, response.data])
                // console.log(response.data);
            });
        })
    }, [items]);
    // React.useEffect(() => {     
    //     props.order.listItemID.map(item => {
    //         const getData = async () => {  
    //         await axios.post("http://localhost:4000/revenue/searchItem", {searchItem: item}).then((response) => {
    //             setitems([...items, response.data])
    //             console.log(response.data);
    //             });
    //         }  
    //         getData();
    //     })
    // }, []);
    if (!items) return null;
    // console.log("he", typeof items)
    return (
        items.map((item, index) => (
            <ShowProduct order={props.order} item={item} indexx={index}/>
        ))
    )
}