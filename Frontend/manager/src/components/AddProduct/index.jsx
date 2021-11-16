import React, { useState, useContext, useEffect } from "react";
import Avartar from "../Avatar";
import swal from "sweetalert";
import { productContext } from "../ProductContext/ProductContext";
import Catelory from "./Catelory";
import ModalSize from "./ModalSize";
// import "./index.css"
const AddProduct = () => {
  // const [submit,setSubmit]=useState(false)

  const [productItems, setProductItems] = useState([]);
  const { createdProduct, getProducts, products, getIdProductCurrent } =
    useContext(productContext);
  const [imgPreview, setImgPreview] = useState();
  useEffect(() => getProducts(), []);
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
    setNewproduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  const getValueCatelory = (data) => {
    setNewproduct({
      ...newProduct,
      feature: data,
    });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("brand", newProduct.brand);
    formData.append("madeIn", newProduct.madeIn);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("img", newProduct.img);
    formData.append("feature", newProduct.feature);

    console.log(formData);
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
    setImgPreview(null);
    swal("Product is created", "", "success");
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
          <Catelory getValueCatelory={getValueCatelory} />
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
          <table className="addProduct-content-size-table">
            <tr className="addProduct-content-size-row-heading-table">
              <th className="addProduct-content-size-row-heading-stt">STT</th>
              <th className="addProduct-content-size-row-heading-add">Size</th>
              <th className="addProduct-content-size-row-heading-add">
                Số lượng đã bán
              </th>
              <th className="addProduct-content-size-row-heading-add">
                Số lượng còn
              </th>
              <th className="addProduct-content-size-row-heading-add"> </th>
              <th className="addProduct-content-size-row-heading-add">
                {/* <button className="addProduct-content-size-row-add"> */}
                <ModalSize
                  productItems={productItems}
                  setProductItems={setProductItems}
                />
                {/* Thêm */}
                {/* </button> */}
              </th>
            </tr>

            {productItems.map((productItem, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{productItem.size}</th>
                <th>{productItem.remaining}</th>
                <th>{productItem.size}</th>
              </tr>
            ))}
          </table>

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
                  alt="imgpreview"
                  className="addProduct-img-preview"
                />
              )}
            </div>
            <div className="addProduct-content-size-display">
              <p className="addProduct-content-size-display-text">Hình ảnh:</p>
              <img
                src=""
                alt="Chưa thêm size"
                className="addProduct-content-size-display-img"
              />
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
