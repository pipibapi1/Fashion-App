import React from "react";
// import {Link,Route} from "react-router-dom"
// import "./index.css";
import ProductDetail from "../../ProductDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import LinkButton from "../../LinkButton";
const Product = ({ index, product }) => {
  const { name, brand, remain, sale, price } = product;
  // const ulr="./product/id"
  return (
    <>
      <tr className="listProducts-content-row">
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
          {/* <button className="listProducts-content-row-edit"><i className="far fa-edit"></i></button> */}
        </td>
        <td className="listProducts-content-row-item">
        <LinkButton
            to={`/products/${index - 1}`}
            className="listProducts-content-row-edit"
          >
            <i className="far fa-edit"></i>
          </LinkButton>
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
