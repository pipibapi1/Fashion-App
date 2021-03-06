import React, { useContext, useState, useEffect } from "react";
import SizeProduct from "./SizeProduct";
import Products from "../../Products";
import LinkButton from "../LinkButton";
import Select from "react-select";
import { changeSelectToText, changeTextToSelect } from "../ProductEdit/help";
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
  const { getProductById, loading, products } = useContext(productContext);
  console.log(loading);
  const [sizeSelected, setSizeSelected] = useState(0);
  let { id } = useParams();
  console.log(getProductById(id));
  // useEffect(() => {
  //   setSizeSelected(0);
  //   console.log(";;");
  // }, [products]);
  let {
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
  items = items ? items : [];
  // const {name,brand,remain,sale,price,where,}
  const [imgProductItem, setImgProductItem] = useState(() => {
    // if (!loading) return "";
    if (getProductById(id).items && getProductById(id).items.length > 0)
      return getProductById(id).items[0].img;
    return "";
  });
  useEffect(() => {
    if (getProductById(id).items && getProductById(id).items.length > 0)
      setImgProductItem(getProductById(id).items[0].img);
  }, [items]);
  const handleClickSizeProduct = (index) => {
    console.log(index);
    setImgProductItem(items[index].img);
    setSizeSelected(index);
  };
  return (
    <>
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">
          Chi tiết sản phẩm ID {id}
        </h3>
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
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Loại</p>
            </label>
            <Select
              className="addProduct-content-text-name-input addProduct-content-text-name-input-option"
              isMulti
              value={changeTextToSelect(feature)}
              isDisabled
            />
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
