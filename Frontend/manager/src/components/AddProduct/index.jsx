import React from 'react'
// import "./index.css"
const AddProduct = () => {
    return (
        <>
        {/* Heading  */}
          <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Thêm sản phẩm</h3>
        <div className="listProducts-heading-info">
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
                <label htmlFor="nameProduct" className="addProduct-content-text-name-label">
                    Tên sản phẩm
                </label>
                    <input type="text" className="addProduct-content-text-name-input" id="nameProduct"/>
                <label htmlFor="brandProduct" className="addProduct-content-text-name-label">
                    Tên thương hiệu
                </label>
                    <input type="text" className="addProduct-content-text-name-input"  id="brandProduct"/>
            </div>
            <div className="addProduct-content-text-des">
            <label htmlFor="desProduct" className="addProduct-content-text-des-label">
                    Mô tả
            </label>
                    <textarea className="addProduct-content-text-des-input" id="desProduct" />
            </div>
            <div className="addProduct-content-text-bot">
                <label htmlFor="manuProduct" className="addProduct-content-text-bot-where-label">
                    Nơi sản xuất
                </label>
                    <input type="text" className="addProduct-content-text-bot-input" id="manuProduct"/>
                <label htmlFor="numberProduct" className="addProduct-content-text-bot-number-label">
                    Giá
                </label>
                    <input type="number" className="addProduct-content-text-bot-input" id="numberProduct" />
            </div>
          </div>

          {/* Input size */}
          <div className="addProduct-content-size">
          <table className="addProduct-content-size-table">
          <tr className="addProduct-content-size-row-heading-table">
            <th className="addProduct-content-size-row-heading">STT</th>
            <th className="addProduct-content-size-row-heading">Size</th>
            <th className="addProduct-content-size-row-heading">Màu sắc</th>
            <th className="addProduct-content-size-row-heading">Số lượng đã bán</th>
            <th className="addProduct-content-size-row-heading">
              Số lượng còn
            </th>
            <th className="addProduct-content-size-row-heading"> </th>
            <th className="addProduct-content-size-row-heading">
              <button className="addProduct-content-size-row-add">Thêm</button>
            </th>
          </tr>
          
          

          
        </table>
        <div className="addProduct-content-size-display">
          <p className="addProduct-content-size-display-text">

          Hình ảnh: 
          </p>
          <img src="" alt="Chưa thêm size" className="addProduct-content-size-display-img" />
        </div>

        <button className="addProduct-submit">
        <i className="fas fa-plus-circle"></i>
          Thêm
        </button>
          </div>

      </div>
        </>
    )
}

export default AddProduct
