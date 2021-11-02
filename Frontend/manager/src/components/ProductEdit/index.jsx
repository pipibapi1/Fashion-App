import React,{useState,useEffect} from "react";
import SizeProduct from "./SizeProduct";
// import "./index.css";
// import "..//AddProduct/index.css"
const ProductEdit = () => {
  const [img, setImg] = useState("");
    const closeModal=()=>{
        document.querySelector(".modal-hoangkui-add").style.display="none";
    }
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

  return (
    <>
      {/* Heading  */}
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Sửa sản phẩm</h3>
        <div className="listProducts-heading-info">
          {/* <button className="button-hoangkui">
            <i className="fas fa-edit"></i>
            Sửa sản phẩm này
          </button> */}
          <h4 className="listProducts-heading-info-name">Nguyễn Trần Hoàng</h4>
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UTvzr_H01LEAX9fT_8T&_nc_ht=scontent.fdad2-1.fna&oh=ad71bf3dd4b49191be326bd411384505&oe=61A30021"
            alt=""
            className="listProducts-heading-info-img"
          />
        </div>
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
              value="Váy đầm"
              id="nameProduct"
              // name="nameProduct"

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
              value="Lunvuituoi"
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
              value="Đầm voan hoa dáng tầng chất liệu lụa voan Hàn, form rộng, dáng dài nhẹ nhàng xinh vô cùng
                    ✔️ Dài : 110cm, Ngực dưới 102cm
                    ✔️Chất liệu : Voan lụa có lót
                    ✔️ Freesize, Phom oversize -  bầu bí mặc thoái mái luôn ạ
                    
                    🛑  HƯỚNG DẪN MUA HÀNG
                    ✔️ Các bạn đặt đúng màu, mẫu mình thích, không đặt hàng qua GHI CHÚ. Nếu lưu ý đặc biệt hãy inbox cho shop, chúng mình luôn sẵn sàng hỗ trợ bạn. 
                    ✔️ Hãy sử dụng mã miễn phí vận chuyển nếu có phần thanh toán nhé.
                    ✔️ Thời gian giao cho đơn vị vận chuyển trung bình là 1 ngày. 
                    ✔️ Vận chuyển là của shopee nên nếu có vấn đề bạn hãy liên lạc hotline của đơn vị vận chuyển tương ứng nhé 
                    ✔️ Khách sỉ, vui lòng inbox cho shop.
                    
                    HOTLINE : 0987 888 578
                    Địa Chỉ: 111 Ô Chợ Dừa, Đống Đa , Hà Nội."
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
              value="Trung quốc"
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
              value="14000"
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
              value="2500"
              id="manuProduct"
            />
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
              {/* <th className="addProduct-content-size-row-heading"> </th> */}
              <th className="addProduct-content-size-row-heading">
                <button
                onClick={openModal}
                className="button-hoangkui add-button-edit">
                  <i className="fas fa-plus"></i>
                  Thêm
                  </button>
              </th>
            </tr>
            <SizeProduct  />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
            <SizeProduct />
          </table>
          <div className="addProduct-content-size-display">
            <p className="addProduct-content-size-display-text">Hình ảnh:</p>
            <img
              src="https://product.hstatic.net/1000035031/product/vay-dam-cong-so-thoi-trang-eden-dang-chu-a-co-tim-tay-phong-d405__6__9a4811529e834206b25da08ec496995f_master.jpg"
              alt="Chưa thêm size"
              className="addProduct-content-size-display-img-size"
            />
          </div>

          <div className="listProducts-page">
            <i className="fas fa-step-backward"></i>
            1/10
            <i className="fas fa-step-forward"></i>
          </div>
        </div>
        <button className="addProduct-submit">
            Lưu
        </button>
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
              <input
                type="number"
                className="modal-input-label-select"
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
          <button className="modal-button-save">Thêm</button>
    {/* close button */}
      <button 
      onClick={closeModal}
      className="modal-button-close"><i className="fas fa-times"></i>Tắt</button>

        </div>
      </div>

    </>
  );
};

export default ProductEdit;
