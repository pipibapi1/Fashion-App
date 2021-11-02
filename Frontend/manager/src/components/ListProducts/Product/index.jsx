import React from "react";
// import "./index.css";
const Product = ({index,product}) => {
  const {name,brand,remain,sale,price}=product
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
          <button className="listProducts-content-row-edit"><i className="far fa-edit"></i>Sửa</button>
        </td>
        <td className="listProducts-content-row-item">
          <button className="listProducts-content-row-remove"> <i className="fas fa-trash"></i>Xóa</button>
        </td>
      
      </tr>
    </>
  );
};

export default Product;
