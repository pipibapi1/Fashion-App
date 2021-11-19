import React, { useState, useEffect, useContext } from "react";
import SizeProduct from "./SizeProduct";
import swal from "sweetalert";
import Select from "react-select";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import Avartar from "../Avatar";
import { productContext } from "../ProductContext/ProductContext";
import ModalSize from "./ModalSize";
import { changeSelectToText, changeTextToSelect, options } from "./help";
const optionValue = [
  {
    selected: false,
    value: "XXS",
  },
  {
    selected: false,
    value: "XS",
  },
  {
    selected: false,
    value: "S",
  },
  {
    selected: false,
    value: "M",
  },
  {
    selected: false,
    value: "L",
  },
  {
    selected: false,
    value: "XL",
  },
  {
    selected: false,
    value: "XXL",
  },
];

const ProductEdit = () => {
  console.log("Render");
  const [optionValues, setOptionValues] = useState(optionValue);
  const changeValue = (data) => {
    setOptionValues(data);
  };
  const history = useHistory();
  const { id } = useParams();
  let { getProductById, updateProduct, loading } = useContext(productContext);
  // useEffect(() => {
  //   const newOptionValues = [...optionValues];
  //   for (let x of newOptionValues) {
  //     for (let y of getProductById(id).items) {
  //       if (y.size === x.value) {
  //         x.selected = false;
  //       }
  //     }
  //   }
  //   console.log(newOptionValues);
  // }, []);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [upDateProduct, setUpdateProduct] = useState({
    name: "",
    brand: "",
    description: "",
    feature: "",
    img: "",
    items: [],
    madeIn: "",
    price: "",
    remaining: "",
    sold: "",
  });

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
  } = upDateProduct;
  items = items ? items : [];
  const [selectedOption, setSelectedOption] = useState(() => {
    // console.log("?", changeTextToSelect(getProductById(id).feature));
    return changeTextToSelect(getProductById(id).feature);
  });
  console.log("?", selectedOption);

  // OnChange value
  const onChangeProduct = (e) => {
    setUpdateProduct({
      ...upDateProduct,
      [e.target.name]: e.target.value,
    });
  };
  const [imgPreview, setImgPreview] = useState(() => {
    console.log(":D", getProductById(id).img);
    return {
      preview: getProductById(id).img,
    };
  });

  useEffect(() => {
    const newOptionValues = optionValue;
    for (const x of newOptionValues) {
      for (const y of items) {
        if (y.size == x.value) {
          console.log(y.size, x.value);
          x.selected = true;
        }
      }
    }
    // getProductById(id);
    // setOptionValues(newOptionValues);
    setUpdateProduct(getProductById(id));
  }, [items.length]);
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imgPreview.preview);
    };
  }, [imgPreview]);

  //
  const [imgSize, setImgSize] = useState(() => {
    if (
      getProductById(id).items &&
      getProductById(id).items.length >= 0 &&
      getProductById(id).items[0]
    )
      return getProductById(id).items[0].img;
    return "";
  });
  useEffect(() => {
    if (getProductById(id).items && getProductById(id).items.length > 0) {
      setImgSize(getProductById(id).items[0].img);
    }
    console.log(":D", getProductById(id).img);
    setImgPreview({
      preview: getProductById(id).img,
    });
    setUpdateProduct(getProductById(id));
    const newOptionValues = [...optionValue];
    for (const x of newOptionValues) {
      for (const y of items) {
        console.log(y);
        if (y.size == x.value) {
          console.log(y.size, x.value);
          x.selected = true;
        }
      }
    }
    console.log("ddddddddddddd", newOptionValues);
    setOptionValues(newOptionValues);
    console.log(":D???????");
    // console.log("??", newOptionValues);
  }, [loading, getProductById(id)]);
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
    data.append("feature", changeSelectToText(selectedOption));
    updateProduct(id, data);
    history.push(`/products/${id}`);

    swal("Sản phẩm đã được cập nhập", "", "success");
  };

  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
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
              htmlFor="nameProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Giá</p>
              <input
                type="text"
                disabled
                className="addProduct-content-text-name-input"
                value={price}
                onChange={onChangeProduct}
                name="price"
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
            <ModalSize optionValues={optionValues} idProduct={id} />
          </div>
          <div className="wrraper-table">
            <table className="addProduct-content-size-table">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <SizeProduct
                      changeValue={changeValue}
                      optionValues={optionValues}
                      setOptionValues={setOptionValues}
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
                      items={items}
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
