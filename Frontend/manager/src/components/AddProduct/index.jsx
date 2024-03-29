import React, { useState, useContext, useEffect } from "react";
import Avartar from "../Avatar";
import swal from "sweetalert";
import { productContext } from "../ProductContext/ProductContext";
import ModalSize from "./ModalSize";
import SizeProduct from "./SizeProduct";
import { handleIndex, handleIndexItem } from "./help";
import Select from "react-select";
import {
  changeSelectToText,
  changeTextToSelect,
  options,
} from "../ProductEdit/help";
import { optionValues, optionValuesInit } from "./help";
// import "./index.css"
const AddProduct = () => {
  // option select
  // console.log("Vcc",);
  const [optionSizes, setOptionSizes] = useState(() => {
    const newOptionSize = [...optionValuesInit];
    return newOptionSize;
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  const [checkBox, setCheckBox] = useState(true);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [imgSize, setImgSize] = useState();
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    // setImgSize("")
    handleClickSizeProduct(0);
  }, [productItems]);
  const handleClickSizeProduct = (index) => {
    // console.log("vcc", productItems, productItems[index].img);
    if (productItems && productItems[index]) {
      setImgSize(productItems[index].img.preview);
      setSizeSelected(index);
    }
  };
  const removeProductItem = (index) => {
    const productItemsRemoved = [...productItems];
    productItemsRemoved.splice(index, 1);
    setProductItems(productItemsRemoved);
  };
  const {
    createdProduct,
    getProducts,
    createdProductItem,
    products,
    productItemsGlobal,
    getIdProductCurrent,
    getProductitems,
    getIdProductItemCurrent,
  } = useContext(productContext);
  const [imgPreview, setImgPreview] = useState();

  useEffect(() => {
    return () => {
      imgPreview && URL.revokeObjectURL(imgPreview.preview);
    };
  }, [imgPreview]);
  const [newProduct, setNewproduct] = useState({
    name: "",
    brand: "",
    madeIn: "",
    price: 0,
    description: "",
    img: "",
    feature: "",
  });
  const { name, brand, madeIn, price, description } = newProduct;
  const onChangeField = (e) => {
    setCheckBox(true);
    setNewproduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    console.log(":D ????????????????????");
    const newOptions = [...optionValues];
    for (let x of productItems) {
      for (var y in newOptions) {
        if (x.size === newOptions[y].value) {
          newOptions[y].selected = true;
        }
      }
    }
    console.log(":D ????????????????????", newOptions);
    if (productItems.length !== 0) setOptionSizes(newOptions);
  }, [productItems]);
  const removeOption = (value) => {
    const newOptions = [...optionSizes];
    for (var x in newOptions) {
      if (newOptions[x].value === value) {
        newOptions[x].selected = false;
      }
    }
    setOptionSizes(newOptions);
  };
  const handleSubmit = () => {
    if (
      newProduct.name === "" ||
      newProduct.brand === "" ||
      newProduct.madeIn === "" ||
      newProduct.price === "" ||
      newProduct.img === "" ||
      newProduct.description === ""
    ) {
      swal("Không thể thêm", "Bạn cần điền đủ thông tin", "error");
      return;
    }

    const idProductItem = Number(getIdProductItemCurrent());
    const idProduct = handleIndex(Number(getIdProductCurrent().slice(2)) + 1);
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("id", idProduct);
    formData.append("brand", newProduct.brand);
    formData.append("madeIn", newProduct.madeIn);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("img", newProduct.img);
    formData.append("feature", changeSelectToText(selectedOption));

    if (productItems.length > 0) {
      createdProduct(formData);
      setNewproduct({
        name: "",
        brand: "",
        madeIn: "",
        price: 0,
        description: "",
        img: "",
        feature: "",
      });
      for (let index in productItems) {
        let { size, img, sold, remaining } = productItems[Number(index)];
        let dataProductItem = new FormData();
        dataProductItem.append("size", size);
        dataProductItem.append(
          "id",
          handleIndexItem(idProductItem + Number(index))
        );
        dataProductItem.append("img", img);
        dataProductItem.append("sold", sold);
        dataProductItem.append("remaining", remaining);
        dataProductItem.append("productID", idProduct);
        createdProductItem(dataProductItem, idProduct);
      }
      setImgPreview("");
      setImgSize("");
      setProductItems([]);
      setSizeSelected(0);
      swal("Product is created", "", "success");
      setSelectedOption(null);
      setOptionSizes([...optionValuesInit]);
      // console.log("Vcc", optionValues);
      setCheckBox(false);
    } else {
      swal(
        "Không thể thêm",
        "Bạn cần ít nhất 1 loại sản phẩm để thêm thành công",
        "error"
      );
    }
  };

  const handleChangImg = (e) => {
    setNewproduct({
      ...newProduct,
      img: e.target.files[0],
    });
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImgPreview(file);
  };
  console.log("Render");
  return (
    <>
      {/* Heading  */}
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Thêm sản phẩm</h3>
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
                name="name"
                value={name}
                onChange={onChangeField}
                className="addProduct-content-text-name-input"
                id="nameProduct"
              />
            </label>
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Giá</p>
              <input
                name="price"
                value={price}
                onChange={onChangeField}
                type="number"
                className="addProduct-content-text-name-input"
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
                name="madeIn"
                value={madeIn}
                onChange={onChangeField}
                type="text"
                className="addProduct-content-text-name-input"
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
                name="brand"
                value={brand}
                onChange={onChangeField}
                type="text"
                className="addProduct-content-text-name-input"
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
              {/* <input
                type="text"
                className="addProduct-content-text-name-input"
                value={feature}
                onChange={onChangeProduct}
                name="feature"
                id="brandProduct"
              /> */}
            </label>
            <Select
              className="addProduct-content-text-name-input addProduct-content-text-name-input-option"
              isMulti
              value={selectedOption}
              onChange={handleChangeSelect}
              autoFocus
              options={options}
            />
          </div>
          <div className="addProduct-content-text-name">
            <label
              htmlFor="desProduct"
              className="addProduct-content-text-name-label addProduct-content-text-des-label"
            >
              <p className="addProduct-content-text-name-title">Mô tả</p>
              <textarea
                name="description"
                value={description}
                onChange={onChangeField}
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
            <p className="table-heading-size">Size</p>
            {/* <p className="table-heading-color">Màu sắc</p> */}
            <p className="table-heading-sale">Số lượng đã bán</p>
            <p className="table-heading-remain">Số lượng còn</p>
            <p className="table-heading-button">
              <ModalSize
                handleClickSizeProduct={handleClickSizeProduct}
                optionSizes={optionSizes}
                setOptionSizes={setOptionSizes}
                productItems={productItems}
                setProductItems={setProductItems}
              />
            </p>
          </div>
          <div className="wrraper-table">
            <table className="addProduct-content-size-table">
              <tbody>
                {productItems.map((size, index) => {
                  return (
                    <SizeProduct
                      style={
                        sizeSelected === index
                          ? { backgroundColor: "#a3c8f2", color: "#302e31" }
                          : {}
                      }
                      onClickSizeProduct={handleClickSizeProduct}
                      removeOption={removeOption}
                      key={index}
                      index={index}
                      size={size}
                      removeProductItem={removeProductItem}
                    />
                  );
                })}
              </tbody>
            </table>
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

              {imgPreview && (
                <img
                  src={imgPreview.preview}
                  alt=""
                  className="addProduct-img-preview"
                />
              )}
            </div>
            <div className="addProduct-content-size-display">
              <p className="addProduct-content-size-display-text">Hình ảnh:</p>
              {imgSize && (
                <img
                  src={imgSize}
                  alt=""
                  className="addProduct-content-size-display-img-size"
                />
              )}
            </div>
          </div>
          <button onClick={handleSubmit} className="addProduct-submit">
            <i className="fas fa-plus-circle"></i>
            Thêm
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
