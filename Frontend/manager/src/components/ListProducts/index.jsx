import React from 'react'
import "./index.css"
const ListProducts = () => {
    return (
        <>
            <div className="listProducts-heading">
                <h3 className="listProducts-heading-title">
                    Danh sách sản phẩm
                </h3>
                <input type="text" className="listProducts-heading-search" placeholder="Tìm kiếm sản phẩm và thương hiệu"/>
                <button className="listProducts-heading-add-product">Thêm sản phẩm</button>
                <div className="listProducts-heading-info">
                    <h4 className="listProducts-heading-info-name">Nguyễn Trần Hoàng</h4>
                    <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UTvzr_H01LEAX9fT_8T&_nc_ht=scontent.fdad2-1.fna&oh=ad71bf3dd4b49191be326bd411384505&oe=61A30021" alt="" className="listProducts-heading-info-img" />
                </div>
            </div>
            <div className="listProducts-table">
                <div className="listProducts-table-heading">
                    <input type="checkbox" className="listProducts-table-heading-checkbox" />
                    <h4 className="listProducts-table-heading-stt">STT</h4>
                    <div className="listProducts-table-heading-name">
                        <h4 className="listProducts-table-heading-name-title">Thương hiệu</h4>
                        <i className="listProducts-table-heading-name-sort"></i>
                    </div>
                    <div className="listProducts-table-heading-name">
                        <h4 className="listProducts-table-heading-name-title">Thương hiệu</h4>
                        <i className="listProducts-table-heading-name-sort"></i>
                    </div>
                    <div className="listProducts-table-heading-name">
                        <h4 className="listProducts-table-heading-name-title">Thương hiệu</h4>
                        <i className="listProducts-table-heading-name-sort"></i>
                    </div>
                    <div className="listProducts-table-heading-name">
                        <h4 className="listProducts-table-heading-name-title">Thương hiệu</h4>
                        <i className="listProducts-table-heading-name-sort"></i>
                    </div>
                    <div className="listProducts-table-heading-name">
                        <h4 className="listProducts-table-heading-name-title">Thương hiệu</h4>
                        <i className="listProducts-table-heading-name-sort"></i>
                    </div>
                    <button className="listProducts-table-heading-delete">Xóa</button>



                </div>
                <ul className="listProducts-list">
                    <li className="listProducts-item">

                    </li>
                </ul>
            </div>
        </>
    )
}

export default ListProducts
