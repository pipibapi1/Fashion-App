import React, { useContext, useState } from "react";
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
import { productContext } from "../ProductContext/ProductContext";

const ProductDetail = () => {
  const { getProductById, loading } = useContext(productContext);
  console.log(loading);
  const [sizeSelected, setSizeSelected] = useState(0);
  let { id } = useParams();
  console.log(getProductById(id));
  const {
    name,
    brand,
    description,
    feature,
    img,
    items,
    madeIn,
    price,
    remaining,
    sold,
  } = getProductById(id);
  // const {name,brand,remain,sale,price,where,}
  const [imgProductItem, setImgProductItem] = useState(() => {
    if (!items) return "";
    if (items.length > 0) return items[0].img;
    return "";
  });
  const handleClickSizeProduct = (index) => {
    console.log(index);
    setImgProductItem(items[index].img);
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
              <p className="addProduct-content-text-name-title">Tên sản phẩm</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={name}
                disabled
                id="nameProduct"
              />
            </label>
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">ID sản phẩm</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={id}
                disabled
                id="brandProduct"
              />
            </label>
          </div>

          <div className="addProduct-content-text-name">
            <label
              htmlFor="nameProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Nơi sản xuất</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={madeIn}
                disabled
                id="nameProduct"
              />
            </label>
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">
                Tên thương hiệu
              </p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={brand}
                disabled
                id="brandProduct"
              />
            </label>
          </div>

          <div className="addProduct-content-text-name">
            <label
              htmlFor="nameProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Giá</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={price}
                disabled
                id="nameProduct"
              />
            </label>
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Catelory</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={feature}
                disabled
                id="brandProduct"
              />
            </label>
          </div>
          <div className="addProduct-content-text-name">
            <label
              htmlFor="desProduct"
              className="addProduct-content-text-name-label addProduct-content-text-des-label"
            >
              <p className="addProduct-content-text-name-title">Mô tả</p>
              <textarea
                value={description}
                disabled
                className="addProduct-content-text-name-input addProduct-content-text-des-input"
                id="desProduct"
              />
            </label>
          </div>
        </div>

        <div className="addProduct-content-size">
          <SizeHeader />
          <div className="wrraper-table">
            <table className="addProduct-content-size-table">
              <tbody>
                {items.map((item, index) => {
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
                      item={item}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <TotalSize sale={sold} remain={remaining} />
          <div className="addProduct-content-size-display-wrapper">
            <div className="addProduct-content-size-display addProduct-img-preview-div">
              <p className="addProduct-content-size-display-text addProduct-content-size-display-text-view">
                Ảnh đại diện
              </p>
              <img
                src={img}
                alt=""
                className="addProduct-img-preview addProduct-img-preview-view"
              />
            </div>
            <div className="addProduct-content-size-display">
              <p className="addProduct-content-size-display-text">Hình ảnh:</p>
              <img
                src={imgProductItem}
                alt=""
                className="addProduct-content-size-display-img-size"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
