import React, { useState, useEffect, useContext } from "react";
import { productContext } from "../ProductContext/ProductContext";
import { handleIndexItem } from "../AddProduct/help";
import swal from "sweetalert";

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
const ModalSize = ({ idProduct, optionValues }) => {
  console.log("rrrrrr");
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
    if (
      productItem.img === "" ||
      productItem.remaining === 0 ||
      productItem.size === null
    ) {
      swal("Bạn cần điền đầy đủ thông tin", "", "warning");
      return;
    }
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
    swal("Đã thêm thành công", "", "success");
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
                {optionValues.map((optionValue) => {
                  if (!optionValue.selected) {
                    return (
                      <option value={optionValue.value}>
                        {optionValue.value}
                      </option>
                    );
                  }
                })}
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
