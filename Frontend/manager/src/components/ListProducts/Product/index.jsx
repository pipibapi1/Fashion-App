import React from "react";

import ProductDetail from "../../ProductDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory 
} from "react-router-dom";
import LinkButton from "../../LinkButton";
const Product = ({ index, product }) => {
  const { name, brand, remain, sale, price } = product;
  let history = useHistory();
  const handleClickProduct=()=>{
    history.push(`/products/${index-1}`);
    console.log(":");
  }
  // const ulr="./product/id"
  return (
    <>
      <tr 
      onClick={handleClickProduct}
      className="listProducts-content-row">
        <td className="listProducts-content-row-item">
          <input
            type="checkbox"
            className="listProducts-content-row-checkbox"
          />
        </td>
        <td className="listProducts-content-row-item">{index}</td>
        <td className="listProducts-content-row-item">{name}</td>
        <td className="listProducts-content-row-item">{brand}</td>
        <td className="listProducts-content-row-item">{remain}</td>
        <td className="listProducts-content-row-item">{sale}</td>
        <td className="listProducts-content-row-item">{price}</td>
        <td className="listProducts-content-row-item">

        </td>
        <td className="listProducts-content-row-item">
          <LinkButton
            to={`/products/edit/${index - 1}`}
            className="listProducts-content-row-edit"
          >
            <i className="far fa-edit"></i>
          </LinkButton>
          <button className="listProducts-content-row-remove">
            {" "}
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
