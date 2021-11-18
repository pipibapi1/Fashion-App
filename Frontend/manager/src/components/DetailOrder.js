import React from "react";
import axios from "axios";
import ShowProduct from "./ShowProduct";

export default function DetailOrder(props) {
    const [items, setitems] = React.useState([]);
    // React.useEffect(() => {
    //     // console.log("hihi", props.order.listItemID)
    //     if(items.length < props.order.listItemID.length) props.order.listItemID.map((item, index) => {
    //         axios.post("http://localhost:3000/revenue/searchItem", {searchItem: item}).then((response) => {
    //             if(props.order.listItemID[index] === response.data.id)
    //                 setitems([...items, response.data])
    //             // console.log(response.data);
    //         });
    //     })
    // }, []);
    React.useEffect(() => {     
        if(items.length < props.order.listItemID.length) props.order.listItemID.map((item, index) => {
            const getData = async () => {  
            await axios.post("http://localhost:3000/revenue/searchItem", {searchItem: item}).then((response) => {
                if(props.order.listItemID[index] === response.data.id && index === items.length )
                    setitems([...items, response.data])
                // console.log(response.data);
                });
            }  
            getData();
        })
    }, [items]);
    if (!items) return null;
    console.log("he", items)
    
    return (
        // if(items.length === props.order.listItemID.length) 
        items.map((item, index) => (
            <ShowProduct order={props.order} item={item} indexx={index}/>
        ))
    )
}