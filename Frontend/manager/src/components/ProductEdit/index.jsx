import React, { useState, useEffect } from "react";
import SizeProduct from "./SizeProduct";
import Products from "../../Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import TotalSize from "../ProductDetail/TotalSize";
import Avartar from "../Avatar";
// import "./index.css";
// import "..//AddProduct/index.css"
const ProductEdit = () => {
  const [sizeSelected, setSizeSelected] = useState(0);

  let { id } = useParams();
  console.log(id);
  const [img, setImg] = useState("");
  const closeModal = () => {
    document.querySelector(".modal-hoangkui-add").style.display = "none";
  };
  const openModal = () => {
    var modal = document.querySelector(".modal-hoangkui-add");
    modal.style.display = "block";
    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(img);
    };
  }, [img]);
  const handlePreview = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImg(file.preview);
  };

  //
  const [imgSize, setImgSize] = useState(Products[id].sizes[0].img);

  const handleClickSizeProduct = (index) => {
    console.log(index);
    setImgSize(Products[id].sizes[index].img);
    setSizeSelected(index);
  };

  return (
    <>
      {/* Heading  */}
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Sửa sản phẩm</h3>
        <Avartar />
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
              id="manuProduct"
            />
          </div>
        </div>

        {/* Input size */}
        <div className="addProduct-content-size">
          <div className="table-heading">
            <p className="table-heading-stt">STT</p>
            <p className="table-heading-size">Size</p>
            <p className="table-heading-color table-heading-color-edit">
              Màu sắc
            </p>
            <p className="table-heading-sale">Đã bán</p>
            <p className="table-heading-remain table-heading-remain-edit">
              Còn
            </p>
            <button
              onClick={openModal}
              className="button-hoangkui add-button-edit"
            >
              <i className="fas fa-plus"></i>
              Thêm
            </button>
          </div>
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
              src={imgSize}
              alt="Lỗi ảnh"
              className="addProduct-content-size-display-img-size"
            />
          </div>
        </div>
        <button className="addProduct-submit">Lưu</button>
      </div>
      {/* modal */}
      <div className="modal-hoangkui-add modal-hoangkui">
        <div className="modal-content-hoangkui">
          <h3 className="modal-heading">Chế độ thêm size và màu sắc</h3>
          <div className="modal-input">
            <div className="modal-input-container">
              <label className="modal-input-label" htmlFor="size">
                Size
              </label>
              <select
                className="modal-input-label-select"
                name="size"
                id="size"
              >
                <option value="XXS">XXS</option>
                <option value="XS">XS </option>
                <option value="S">S</option>
                <option selected value="M">
                  M
                </option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="modal-input-container">
              <label className="modal-input-label" htmlFor="size">
                Màu sắc
              </label>
              <select
                className="modal-input-label-select"
                name="size"
                id="size"
              >
                <option value="green">Xanh</option>
                <option value="red">Đỏ </option>
                <option value="blue">Lam</option>
                <option selected value="pink">
                  Hồng
                </option>
                <option value="orange">Cam</option>
                <option value="indigo">Chàm</option>
                <option value="violet">Tím</option>
                <option value="black">Đen</option>
              </select>
            </div>
            <div className="modal-input-container">
              <label className="modal-input-label" htmlFor="size">
                Số lượng còn
              </label>
              <input type="number" className="modal-input-label-select" />
            </div>
            <div className="modal-input-container center-hoangkui center-center-hoangkui">
              <label className="modal-input-label" htmlFor="size">
                Hình ảnh
              </label>
              <img src={img} alt="" className="modal-input-display-img" />
              <input type="file" onChange={handlePreview} />
            </div>
          </div>
          <button className="modal-button-save">Thêm</button>
          {/* close button */}
          <button onClick={closeModal} className="modal-button-close">
            <i className="fas fa-times"></i>Tắt
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
