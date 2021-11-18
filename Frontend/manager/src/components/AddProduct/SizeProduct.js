import React, { useState, useEffect } from "react";
import swal from "sweetalert";
// import "./index.css"
const SizeProduct = ({
  removeProductItem,
  index,
  size,
  onClickSizeProduct,
  style,
}) => {
  const [img, setImg] = useState(
    "https://product.hstatic.net/1000035031/product/vay-dam-cong-so-thoi-trang-eden-dang-chu-a-co-tim-tay-phong-d405__6__9a4811529e834206b25da08ec496995f_master.jpg"
  );
  const closeModal = () => {
    document.querySelector(".modal-hoangkui-edit").style.display = "none";
  };
  useEffect(() => {
    setImg("");
  }, [size]);
  const openModal = () => {
    var modal = document.querySelector(".modal-hoangkui-edit");
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
  const handleRemove = () => {
    swal({
      title: "Bạn có chắc chắn muốn xóa?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // deleteProduct(id);
        removeProductItem(index);
        swal("Xóa thành công", {
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <tr
        style={style}
        onClick={() => onClickSizeProduct(index)}
        className="listProducts-content-row-size"
      >
        <td style={{ width: "8%" }}>{index + 1}</td>
        <td style={{ width: "14%" }}>{size.size}</td>
        <td style={{ width: "34%" }}>{size.sold}</td>
        <td style={{ width: "26%" }}>{size.remaining}</td>
        <td>
          <button
            onClick={handleRemove}
            className="button-hoangkui button-hoangkui-s size-delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
        {/* <td><button className=" button-hoangkui button-hoangkui-s"><i class="fas fa-trash"></i>Xóa</button></td> */}

        {/* modal edit */}
        <div className="modal-hoangkui-edit modal-hoangkui">
          <div className="modal-content-hoangkui">
            <h3 className="modal-heading">Chế độ chỉnh sửa và màu sắc</h3>
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
                <input
                  type="number"
                  className="modal-input-label-select"
                  value="10"
                />
              </div>
              <div className="modal-input-container center-hoangkui center-center-hoangkui">
                <label className="modal-input-label" htmlFor="size">
                  Hình ảnh
                </label>
                <img src={img} alt="" className="modal-input-display-img" />
                <input type="file" onChange={handlePreview} />
              </div>
            </div>
            <button className="modal-button-save">Lưu</button>
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
