import React, { useCallback, useState, useEffect, useContext } from "react";
import Product from "./Product";
// import Products from "../../Products";
import "../index-hoangkui.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import Avartar from "../Avatar";
import LinkButton from "../LinkButton";
import { productContext } from "../ProductContext/ProductContext";
// import { useHistory } from "react-router-dom";
const ListProducts = () => {
  const { products, getSoldAndRemain } = useContext(productContext);
  useEffect(() => {
    for (let product of products) {
      getSoldAndRemain(product.id);
    }
  }, []);
  const maxItem = 15;
  const [productsView, setProductsView] = useState(products);
  const maxPage = Math.ceil(products.length / maxItem);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const LinkAddProduct = () => {
    history.push("/addproduct");
  };
  // handle tang giam page

  useEffect(() => {
    const newProducts = products.filter((product, index) => {
      return index >= (page - 1) * maxItem && index < page * maxItem;
    });
    setProductsView(newProducts);

    if (page === 1) {
      document.querySelector("#backPage").classList.add("button-disable");
    }
    if (page === maxPage) {
      document.querySelector("#nextPage").classList.add("button-disable");
    }
    return () => {
      if (page === 1) {
        // console.log(document.querySelector("#backPage"));
        document.querySelector("#backPage") &&
          document
            .querySelector("#backPage")
            .classList.remove("button-disable");
      }
      if (page === maxPage) {
        document.querySelector("#nextPage") &&
          document
            .querySelector("#nextPage")
            .classList.remove("button-disable");
      }
    };
  }, [page]);
  const handlePage = (key) => {
    if (key === "+") {
      if (page === maxPage) {
        return;
      }
      setPage(page + 1);
    } else {
      if (page === 1) {
        return;
      }
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="listProducts-heading">
        <h3 className="listProducts-heading-title">Danh sách sản phẩm</h3>
        <div className="listProducts-heading-wrap-search">
          <input
            type="text"
            className="listProducts-heading-search"
            placeholder="Tìm kiếm sản phẩm và thương hiệu"
          />
          <i className="fas fa-search"></i>
        </div>
        <button
          onClick={LinkAddProduct}
          className="listProducts-heading-add-product"
        >
          <i className="fas fa-plus"></i>
          Thêm sản phẩm
        </button>
        <Avartar />
      </div>
      <div className="listProducts-content">
        <table className="listProducts-content-table">
          <tbody className="tbody-nth">
            <tr className="listProducts-content-row-heading-table">
              <th className="listProducts-content-row-heading">
                <input
                  type="checkbox"
                  className="listProducts-content-row-checkbox"
                />
              </th>
              <th className="listProducts-content-row-heading">STT</th>
              <th className="listProducts-content-row-heading">ID</th>
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
                <button className="listProducts-content-row-remove">
                  <i className="fas fa-trash"></i>
                </button>
              </th>
            </tr>
            {products.map((product, index) => {
              if (index >= (page - 1) * maxItem && index < page * maxItem)
                return <Product key={index} index={index} product={product} />;
            })}
          </tbody>
        </table>
        <div className="listProducts-page">
          <button className="page-button">
            <i
              id="backPage"
              className="fas fa-step-backward"
              onClick={() => handlePage("-")}
            ></i>
          </button>
          {page}/{maxPage}
          <button className="page-button">
            <i
              id="nextPage"
              onClick={() => handlePage("+")}
              className="fas fa-step-forward"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
