import React from "react";
// import "./index.css"
const SizeProduct = ({ index, item, onClickSizeProduct, style }) => {
  console.log(style);
  return (
    <>
      <tr
        style={style}
        onClick={() => onClickSizeProduct(index)}
        className="listProducts-content-row-size"
      >
        <td style={{ width: "8%" }}>{index + 1}</td>
        <td style={{ width: "28%" }}>{item.size}</td>
        <td style={{ width: "23%" }}>{item.sold}</td>
        <td style={{ width: "40%" }}>{item.remaining}</td>
      </tr>
    </>
  );
};

export default SizeProduct;
