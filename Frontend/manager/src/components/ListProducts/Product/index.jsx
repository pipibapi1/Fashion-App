import React, { useContext } from "react";
import swal from "sweetalert";
import ProductDetail from "../../ProductDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import LinkButton from "../../LinkButton";
import { productContext } from "../../ProductContext/ProductContext";
const Product = ({ index, product }) => {
  const { deleteProduct } = useContext(productContext);
  const { id, name, brand, sold, remaining, price } = product;
  let history = useHistory();
  const handleClickProduct = () => {
    history.push(`/products/${id}`);
  };
  const handleRemoveProduct = () => {
    swal({
      title: "Bạn có chắc chắn?",
      text: "Bạn sẽ không thể khôi phục nếu thực hiện hành động này?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProduct(id);
        swal("Xóa thành công", {
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <tr className="listProducts-content-row">
        <td className="listProducts-content-row-item">
          <input
            type="checkbox"
            className="listProducts-content-row-checkbox"
          />
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {index + 1}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {id}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {name}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {brand}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {remaining}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {sold}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        >
          {price}
        </td>
        <td
          onClick={handleClickProduct}
          className="listProducts-content-row-item"
        ></td>
        <td className="listProducts-content-row-item">
          <LinkButton
            to={`/products/edit/${id}`}
            className="listProducts-content-row-edit"
          >
            <i className="far fa-edit"></i>
          </LinkButton>
          <button
            onClick={handleRemoveProduct}
            className="listProducts-content-row-remove"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
