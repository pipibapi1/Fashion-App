import React, { useState } from "react";
import SizeProduct from "./SizeProduct";
import Products from "../../Products";
import LinkButton from "../LinkButton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Avartar from "../Avatar";
import SizeHeader from "./SizeHeader";
import TotalSize from "./TotalSize";

const ProductDetail = () => {
  const [sizeSelected, setSizeSelected] = useState(0);
  let { id } = useParams();
  console.log(id);
  // const {name,brand,remain,sale,price,where,}
  const [img, setImg] = useState(Products[id].sizes[0].img);
  const handleClickSizeProduct = (index) => {
    console.log(index);
    setImg(Products[id].sizes[index].img);
    setSizeSelected(index);
  };
  return (
    <>
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Chi tiết sản phẩm</h3>
        <div className="listProducts-heading-info">
          <LinkButton to={`/products/edit/${id}`} className="button-hoangkui">
            <i className="fas fa-edit"></i>Sửa sản phẩm này
          </LinkButton>
          <Avartar />
        </div>
      </div>

      {/* Content */}
      <div className="addProduct-content">
        {/* Input text */}
        <div className="addProduct-content-input-text">
          <div className="addProduct-content-text-name">
            <label
              htmlFor="nameProduct"
              className="addProduct-content-text-name-label"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="addProduct-content-text-name-input"
              value={Products[id].name}
              disabled
              id="nameProduct"
            />
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              Tên thương hiệu
            </label>
            <input
              type="text"
              className="addProduct-content-text-name-input"
              value={Products[id].brand}
              disabled
              id="brandProduct"
            />
          </div>
          <div className="addProduct-content-text-des">
            <label
              htmlFor="desProduct"
              className="addProduct-content-text-des-label"
            >
              Mô tả
            </label>
            <textarea
              value={Products[id].description}
              disabled
              className="addProduct-content-text-des-input"
              id="desProduct"
            />
          </div>
          <div className="addProduct-content-text-bot">
            <label
              htmlFor="manuProduct"
              className="addProduct-content-text-bot-where-label"
            >
              Nơi sản xuất
            </label>
            <input
              type="text"
              className="addProduct-content-text-bot-input"
              value={Products[id].where}
              disabled
              id="manuProduct"
            />
            <label
              htmlFor="numberProduct"
              className="addProduct-content-text-bot-number-label"
            >
              Giá
            </label>
            <input
              type="number"
              className="addProduct-content-text-bot-input"
              value={Products[id].price}
              disabled
              id="numberProduct"
            />
          </div>
          <div className="addProduct-content-text-bot-view">
            <label
              htmlFor="manuProduct"
              className="addProduct-content-text-bot-where-label-view"
            >
              Lượt truy cập
            </label>
            <input
              type="text"
              className="addProduct-content-text-bot-input"
              value={Products[id].view}
              disabled
              id="manuProduct"
            />
          </div>
        </div>
        <div className="addProduct-content-size">
          <SizeHeader />
          <div className="wrraper-table">
            <table className="addProduct-content-size-table">
              <tbody>
                {Products[id].sizes.map((size, index) => {
                  return (
                    <SizeProduct
                      style={
                        sizeSelected === index
                          ? { backgroundColor: "#a3c8f2", color: "#302e31" }
                          : {}
                      }
                      onClickSizeProduct={handleClickSizeProduct}
                      key={index}
                      index={index}
                      size={size}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <TotalSize sale={Products[id].sale} remain={Products[id].remain} />
          <div className="addProduct-content-size-display">
            <p className="addProduct-content-size-display-text">Hình ảnh:</p>
            <img
              src={img}
              alt="Chưa thêm size"
              className="addProduct-content-size-display-img-size"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
