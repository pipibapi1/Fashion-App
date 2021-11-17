import React, { useState, useEffect, useContext } from "react";
import SizeProduct from "./SizeProduct";
import Products from "../../Products";
import swal from "sweetalert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import TotalSize from "../ProductDetail/TotalSize";
import Avartar from "../Avatar";
import { productContext } from "../ProductContext/ProductContext";
import ModalSize from "./ModalSize";
// import "./index.css";
// import "..//AddProduct/index.css"
const ProductEdit = () => {
  let { id } = useParams();
  const { getProductById, updateProduct } = useContext(productContext);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [upDateProduct, setUpdateProduct] = useState(() => {
    return getProductById(id);
  });

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
  } = upDateProduct;
  const onChangeProduct = (e) => {
    setUpdateProduct({
      ...upDateProduct,
      [e.target.name]: e.target.value,
    });
  };
  const [imgPreview, setImgPreview] = useState(() => {
    return {
      preview: img,
    };
  });
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
      URL.revokeObjectURL(imgPreview);
    };
  }, [imgPreview]);
  const handlePreview = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImgPreview(file.preview);
  };

  //
  const [imgSize, setImgSize] = useState(() => {
    if (items.length > 0) return items[0].img;
    return null;
  });

  const handleClickSizeProduct = (index) => {
    console.log(index);
    setImgSize(items[index].img);
    setSizeSelected(index);
  };
  const handleChangImg = (e) => {
    setUpdateProduct({
      ...upDateProduct,
      img: e.target.files[0],
    });
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImgPreview(file);
  };

  const handleUpdateProduct = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("brand", brand);
    data.append("madeIn", madeIn);
    data.append("price", price);
    data.append("description", description);
    data.append("img", img);
    data.append("feature", feature);
    updateProduct(id, data);

    swal("Product is created", "", "success");
  };
  return (
    <>
      {/* Heading  */}
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Sửa sản phẩm ID : {id}</h3>
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
              <p className="addProduct-content-text-name-title">Tên sản phẩm</p>
              <input
                type="text"
                className="addProduct-content-text-name-input"
                value={name}
                name="name"
                onChange={onChangeProduct}
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
                name="madeIn"
                onChange={onChangeProduct}
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
                onChange={onChangeProduct}
                name="brand"
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
                onChange={onChangeProduct}
                name="price"
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
                onChange={onChangeProduct}
                name="feature"
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
                name="description"
                onChange={onChangeProduct}
                className="addProduct-content-text-name-input addProduct-content-text-des-input"
                id="desProduct"
              />
            </label>
          </div>
        </div>

        {/* Input size */}
        <div className="addProduct-content-size">
          <div className="table-heading">
            <p className="table-heading-stt">STT</p>
            <p className="table-heading-size table-heading-size-id">ID</p>
            <p className="table-heading-color table-heading-color-edit">Size</p>
            <p className="table-heading-remain table-heading-remain-edit">
              Còn
            </p>
            <p className="table-heading-sale">Đã bán</p>
            <ModalSize idProduct={id} />
          </div>
          <div className="wrraper-table">
            <table className="addProduct-content-size-table">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <SizeProduct
                      idProduct={id}
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
          <div className="total-detail">
            <h4 className="total-detail-name">Tổng</h4>
            <p className="total-detail-remain total-detail-remain-edit">
              {remaining}
            </p>
            <p className="total-detail-sale total-detail-sale-edit">{sold}</p>
          </div>
          <div className="addProduct-content-size-display-wrapper">
            <div className="addProduct-content-size-display addProduct-img-preview-div">
              <button
                style={{ display: "block", width: 140, height: 30 }}
                onClick={() => document.getElementById("getFile").click()}
              >
                Chọn ảnh đại diện
              </button>
              <input
                type="file"
                id="getFile"
                name="img"
                onChange={handleChangImg}
                style={{ display: "none" }}
              ></input>

              {true && (
                <img
                  src={imgPreview.preview}
                  alt=""
                  className="addProduct-img-preview"
                />
              )}
            </div>
            <div className="addProduct-content-size-display">
              <p className="addProduct-content-size-display-text">Hình ảnh:</p>
              <img
                src={imgSize}
                alt=""
                className="addProduct-content-size-display-img-size"
              />
            </div>
          </div>
        </div>
        <button onClick={handleUpdateProduct} className="addProduct-submit">
          Lưu
        </button>
      </div>
      {/* modal */}
    </>
  );
};

export default ProductEdit;
