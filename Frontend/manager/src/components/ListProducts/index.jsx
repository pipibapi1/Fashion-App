import React, { useCallback } from "react";
import Product from "./Product";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const ListProducts = () => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/product/id"),
    [history]
  );

  return (
    <>
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Danh sách sản phẩm</h3>
        <input
          type="text"
          className="listProducts-heading-search"
          placeholder="Tìm kiếm sản phẩm và thương hiệu"
        />
        <button className="listProducts-heading-add-product">
          <i className="fas fa-plus"></i>
          Thêm sản phẩm
        </button>
        <div className="listProducts-heading-info">
          <h4 className="listProducts-heading-info-name">Nguyễn Trần Hoàng</h4>
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/148352211_1315852945481787_1410223456476714730_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UTvzr_H01LEAX9fT_8T&_nc_ht=scontent.fdad2-1.fna&oh=ad71bf3dd4b49191be326bd411384505&oe=61A30021"
            alt=""
            className="listProducts-heading-info-img"
          />
        </div>
      </div>
      <div className="listProducts-content">
        <table className="listProducts-content-table">
          <tbody>
            <tr className="listProducts-content-row-heading-table listProducts-content-row">
              <th className="listProducts-content-row-heading">
                <input
                  type="checkbox"
                  className="listProducts-content-row-checkbox"
                />
              </th>
              <th className="listProducts-content-row-heading">STT</th>
              <th className="listProducts-content-row-heading">Tên sản phẩm</th>
              <th className="listProducts-content-row-heading">
                Tên thương hiệu
              </th>
              <th className="listProducts-content-row-heading">Số lượng còn</th>
              <th className="listProducts-content-row-heading">
                Số lượng đã bán
              </th>
              <th className="listProducts-content-row-heading">Giá</th>
              <th className="listProducts-content-row-heading"> </th>
              <th className="listProducts-content-row-heading">
                <button className="listProducts-content-row-remove">Xóa</button>
              </th>
            </tr>
            {/* <Router>

          <Link to="/product/id">:D</Link>
          </Router> */}
            <Product/>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </tbody>
        </table>
        <div className="listProducts-page">
          <i className="fas fa-step-backward"></i>
          1/10
          <i className="fas fa-step-forward"></i>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
