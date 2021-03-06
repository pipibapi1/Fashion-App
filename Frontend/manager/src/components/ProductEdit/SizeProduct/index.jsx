import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { productContext } from "../../ProductContext/ProductContext";
// import "./index.css"
const SizeProduct = ({
  // setSizeSelected,
  removeOption,
  optionValues,
  setOptionValues,
  idProduct,
  index,
  item,
  items,
  onClickSizeProduct,
  changeValue,
  style,
}) => {
  const history = useHistory();
  const { deleteProductItem, updateProductItem, deleteProduct } =
    useContext(productContext);
  const [updateItem, setUpdateItem] = useState({
    size: item.size,
    remaining: item.remaining,
    img: item.img,
  });
  const { size, remaining, img } = updateItem;
  const [imgPreview, setImgPreview] = useState(item.img);
  const closeModal = () => {
    document.querySelector(`.modal-hoangkui-edit-${item.id}`).style.display =
      "none";
  };
  const openModal = () => {
    var modal = document.querySelector(`.modal-hoangkui-edit-${item.id}`);
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
    setUpdateItem({
      ...updateItem,
      img: file,
    });
    setImgPreview(file.preview);
  };
  const handleChangeItem = (e) => {
    setUpdateItem({
      ...updateItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleRemoveItem = () => {
    console.log();
    if (items.length < 2) {
      swal({
        title: "Bạn có chắc chắn muốn xóa?",
        text: "Hành động này sẽ xóa luôn sản phẩm hiện tại vì sản phẩm có cần có số lượng để duy trì?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          // deleteProduct(id);
          deleteProductItem(idProduct, item.id);
          deleteProduct(idProduct);
          swal("Xóa thành công", {
            icon: "success",
          });
          history.push("/products");
        }
      });
      return;
    }
    swal({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Bạn sẽ không thể khôi phục nếu thực hiện hành động này?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // deleteProduct(id);
        const newOptionValues = [...optionValues];
        const index = newOptionValues.findIndex(
          (option) => option.value === item.size
        );
        optionValues[index] = {
          value: item.size,
          selected: false,
        };
        removeOption(item.size);
        console.log("index", optionValues);
        // const x = {
        //   ...newOptionValues[index],
        //   selected: false,
        // };
        // newOptionValues[index] = x;
        // console.log("vcc", newOptionValues);
        // changeValue(newOptionValues);
        deleteProductItem(idProduct, item.id);
        onClickSizeProduct(0);

        // console.log(idProduct, item.id);
        swal("Xóa thành công", {
          icon: "success",
        });
      }
    });
  };
  const handleUpdate = () => {
    const data = new FormData();
    data.append("size", size);
    data.append("remaining", remaining);
    data.append("img", img);
    updateProductItem(idProduct, item.id, data);
    closeModal();
    onClickSizeProduct(0);
    swal("Đã được cập nhập", "", "success");
  };
  return (
    <>
      <tr style={style} className="listProducts-content-row-size">
        <td onClick={() => onClickSizeProduct(index)} style={{ width: "8%" }}>
          {index + 1}
        </td>
        <td onClick={() => onClickSizeProduct(index)} style={{ width: "8%" }}>
          {item.id}
        </td>
        <td onClick={() => onClickSizeProduct(index)} style={{ width: "15%" }}>
          {item.size}
        </td>
        <td onClick={() => onClickSizeProduct(index)} style={{ width: "20%" }}>
          {item.remaining}
        </td>
        <td onClick={() => onClickSizeProduct(index)} style={{ width: "20%" }}>
          {item.sold}
        </td>
        <td>
          <button
            onClick={openModal}
            className="button-hoangkui button-hoangkui-s size-edit"
          >
            <i className="far fa-edit"></i>
          </button>{" "}
          <button
            onClick={handleRemoveItem}
            className="button-hoangkui button-hoangkui-s size-delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
        <div className={`modal-hoangkui-edit-${item.id} modal-hoangkui`}>
          <div className="modal-content-hoangkui">
            <h3 className="modal-heading">Chế độ chỉnh sửa</h3>
            <div className="modal-input">
              <div className="modal-input-container">
                <label className="modal-input-label" htmlFor="size">
                  Size
                </label>
                <select
                  className="modal-input-label-select"
                  name="size"
                  disabled
                  value={size}
                  onChange={handleChangeItem}
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
                  onChange={handleChangeItem}
                  className="modal-input-label-select"
                />
              </div>
              <div className="modal-input-container center-hoangkui center-center-hoangkui">
                <label className="modal-input-label" htmlFor="size">
                  Hình ảnh
                </label>
                <img
                  src={imgPreview}
                  alt=""
                  className="modal-input-display-img"
                />
                <input type="file" onChange={handlePreview} />
              </div>
            </div>
            <button onClick={handleUpdate} className="modal-button-save">
              Lưu
            </button>
            {/* close button */}
            <button onClick={closeModal} className="modal-button-close">
              <i className="fas fa-times"></i>Tắt
            </button>
          </div>
        </div>
        {/* modal add size color */}
      </tr>
    </>
  );
};

export default SizeProduct;
