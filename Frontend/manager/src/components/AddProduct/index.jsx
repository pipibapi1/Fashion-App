import React, { useState, useContext } from "react";
import Avartar from "../Avatar";
import swal from "sweetalert";
import { productContext } from "../ProductContext/ProductContext";
// import "./index.css"
const AddProduct = () => {
  const { createdProduct } = useContext(productContext);
  const [newProduct, setNewproduct] = useState({
    name: "",
    brand: "",
    madeIn: "",
    price: null,
    description: "",
    img: "",
    feature: "",
  });
  const { name, brand, madeIn, price, description, img, feature } = newProduct;
  const onChangeField = (e) => {
    setNewproduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(newProduct);
    const data = new FormData();
    data.append("name", name);
    data.append("brand", brand);
    data.append("madeIn", madeIn);
    data.append("price", price);
    data.append("description", description);
    data.append("img", img);
    data.append("feature", feature);

    createdProduct(data);
    swal("Product is created", "", "success");
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

          <div className="addProduct-content-text-name">
            <label
              htmlFor="brandProduct"
              className="addProduct-content-text-name-label"
            >
              <p className="addProduct-content-text-name-title">Catelory</p>{" "}
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="female" />
                female
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="featured" />
                featured
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="seller" />
                seller
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="seller" />
                arrivals
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="seller" />
                Men
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="seller" />
                special
              </div>
              <div className="addProduct-content-catelory">
                <input type="checkbox" name="seller" />
                mens
              </div>
            </label>
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
          <table className="addProduct-content-size-table">
            <tr className="addProduct-content-size-row-heading-table">
              <th className="addProduct-content-size-row-heading">STT</th>
              <th className="addProduct-content-size-row-heading">Size</th>
              <th className="addProduct-content-size-row-heading">Màu sắc</th>
              <th className="addProduct-content-size-row-heading">
                Số lượng đã bán
              </th>
              <th className="addProduct-content-size-row-heading">
                Số lượng còn
              </th>
              <th className="addProduct-content-size-row-heading"> </th>
              <th className="addProduct-content-size-row-heading">
                <button className="addProduct-content-size-row-add">
                  Thêm
                </button>
              </th>
            </tr>
          </table>
          <div className="addProduct-content-size-display">
            <p className="addProduct-content-size-display-text">Hình ảnh:</p>
            <img
              src=""
              alt="Chưa thêm size"
              className="addProduct-content-size-display-img"
            />
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
