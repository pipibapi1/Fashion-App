import React, { useState, useEffect, useContext } from "react";
import { productContext } from "../ProductContext/ProductContext";
import { handleIndexItem } from "../AddProduct/help";
const ModalSize = ({ idProduct }) => {
  const { createdProductItem, getSoldAndRemain, getIdProductItemCurrent } =
    useContext(productContext);
  const [productItem, setProductItem] = useState({
    productID: "",
    size: null,
    img: "",
    sold: 0,
    remaining: 0,
  });
  const { size, remaining } = productItem;

  const handleAddProductItem = () => {
    console.log(productItem);
    // setProductItems([...productItems, productItem]);
    const idItem = handleIndexItem(Number(getIdProductItemCurrent()));
    const data = new FormData();
    data.append("productID", idProduct);
    data.append("img", productItem.img);
    data.append("id", idItem);
    data.append("remaining", productItem.remaining);
    data.append("size", productItem.size);
    data.append("sold", productItem.sold);

    createdProductItem(data, idProduct);
    setImgPreview("");
    closeModal();
    setProductItem({ productID: "", size: "", img: "", sold: 0, remaining: 0 });
  };
  const [imgPreview, setImgPreview] = useState("");
  const onChangeProductItem = (e) => {
    setProductItem({
      ...productItem,
      [e.target.name]: e.target.value,
    });
  };
  const closeModal = () => {
    document.querySelector(".modal-hoangkui-add-create").style.display = "none";
  };
  const handlePreview = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImgPreview(file);
    setProductItem({
      ...productItem,
      img: file,
    });
  };
  useEffect(() => {
    return () => {
      // URL.revokeObjectURL(imgPreview.preview);
    };
  }, [imgPreview]);
  const openModal = () => {
    var modal = document.querySelector(".modal-hoangkui-add-create");
    modal.style.display = "block";
    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  return (
    <>
      <button onClick={openModal} className="button-hoangkui add-button-edit">
        <i className="fas fa-plus"></i>
        Thêm
      </button>

      <div className="modal-hoangkui-add-create modal-hoangkui">
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
                value={size}
                onChange={onChangeProductItem}
                id="size"
              >
                <option value="XXS">XXS</option>
                <option value="XS">XS </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="modal-input-container">
              <label className="modal-input-label" htmlFor="size">
                Số lượng còn
              </label>
              <input
                type="number"
                name="remaining"
                value={remaining}
                required
                onChange={onChangeProductItem}
                className="modal-input-label-select"
              />
            </div>
            <div className="modal-input-container center-hoangkui center-center-hoangkui">
              <label className="modal-input-label" htmlFor="size">
                Hình ảnh
              </label>
              <img
                src={imgPreview.preview}
                alt=""
                // onChange={}
                className="modal-input-display-img"
              />
              <input type="file" onChange={handlePreview} />
            </div>
          </div>
          <button onClick={handleAddProductItem} className="modal-button-save">
            Thêm
          </button>
          {/* close button */}
          <button onClick={closeModal} className="modal-button-close">
            <i className="fas fa-times"></i>Tắt
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalSize;
