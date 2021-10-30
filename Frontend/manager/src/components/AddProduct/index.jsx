import React from 'react'

const AddProduct = () => {
    return (
        <>
          <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Danh sách sản phẩm</h3>
        <div className="listProducts-heading-info">
          <h4 className="listProducts-heading-info-name">Nguyễn Trần Hoàng</h4>
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UTvzr_H01LEAX9fT_8T&_nc_ht=scontent.fdad2-1.fna&oh=ad71bf3dd4b49191be326bd411384505&oe=61A30021"
            alt=""
            className="listProducts-heading-info-img"
          />
        </div>
      </div> 
      <div className="addProduct-content">
          <div className="addProduct-content-text">
            <div className="addProduct-content-text-name">
                <label htmlFor="nameProduct" className="addProduct-content-text-name-name">
                    Tên sản phẩm
                    <input type="text" className="addProduct-content-text-name-name-input" id="nameProduct"/>
                </label>
                <label htmlFor="brandProduct" className="addProduct-content-text-name-brand">
                    Tên thương hiệu
                    <input type="text" className="addProduct-content-text-name-brand-input"  id="brandProduct"/>
                </label>
            </div>
            <div className="addProduct-content-text-des">
            <label htmlFor="desProduct" className="addProduct-content-text-name-brand">
                    Mô tả
                    <input type="textarea" className="addProduct-content-text-name-brand-input" id="desProduct" />
            </label>
            </div>
            <div className="addProduct-content-text-where">
                <label htmlFor="manuProduct" className="addProduct-content-text-name-name">
                    Nơi sản xuất
                    <input type="text" className="addProduct-content-text-name-name-input" id="manuProduct"/>
                </label>
                <label htmlFor="numberProduct" className="addProduct-content-text-name-brand">
                    Giá
                    <input type="number" className="addProduct-content-text-name-brand-input" id="numberProduct" />
                </label>
            </div>
          </div>
          <div className="addProduct-content-size">

          </div>
      </div>
        </>
    )
}

export default AddProduct
