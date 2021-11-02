import React from "react";
// import "./index.css";
const Product = () => {
  return (
    <>
      <tr className="listProducts-content-row">
        <td className="listProducts-content-row-item">
          <input
            type="checkbox"
            className="listProducts-content-row-checkbox"
          />
        </td>
        <td className="listProducts-content-row-item">1</td>
        <td className="listProducts-content-row-item">Váy đầm</td>
        <td className="listProducts-content-row-item">Lunvuituoi</td>
        <td className="listProducts-content-row-item">10</td>
        <td className="listProducts-content-row-item">15</td>
        <td className="listProducts-content-row-item">1000</td>
        <td className="listProducts-content-row-item">
          <button className="listProducts-content-row-edit">Sửa</button>
        </td>
        <td className="listProducts-content-row-item">
          <button className="listProducts-content-row-remove">Xóa</button>
        </td>
      
      </tr>
    </>
  );
};

export default Product;
