import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  CREATE_PRODUCT,
  INIT_PRODUCT,
  CREATE_PRODUCT_ITEM,
  INIT_PRODUCT_ITEM,
  ADD_SOLD_REMAINING,
} from "./constant";
export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [stateProduct, dispatch] = useReducer(reducer, {
    products: [],
    productItemsGlobal: [],
  });
  const { products, productItemsGlobal } = stateProduct;
  const createdProduct = async (data) => {
    try {
      await axios.post("http://localhost:3000/product", data);
      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getIdProductCurrent = () => {
    if (products.length > 0) return products[products.length - 1].id;
    return -1;
  };
  const getIdProductItemCurrent = () => {
    if (productItemsGlobal.length > 0)
      return productItemsGlobal[productItemsGlobal.length - 1].id;
    return -1;
  };
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/product");
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: INIT_PRODUCT,
          payload: res.data.products,
        });
        console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductitems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/productitem");
      console.log(res);
      if (res.data.success) {
        dispatch({
          type: INIT_PRODUCT_ITEM,
          payload: res.data.productItems,
        });
        console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createdProductItem = async (data, idProduct) => {
    try {
      const res = axios.post(
        `http://localhost:3000/productitem/${idProduct}`,
        data
      );
      if (res.data.success)
        dispatch({
          type: CREATE_PRODUCT_ITEM,
          payload: res.data.productItem,
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getSoldAndRemain = async (idProduct) => {
    console.log(idProduct);
    let result = {};
    try {
      const res = await axios.get(
        `http://localhost:3000/productitem/${idProduct}`
      );
      if (res.data.success) {
        let sold = 0;
        let remaining = 0;
        for (let item of res.data.productItems) {
          sold += item.sold;
          remaining += item.remaining;
        }
        result = { idProduct, sold, remaining };
        console.log(result);
        dispatch({
          type: ADD_SOLD_REMAINING,
          payload: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const productValue = {
    products,
    productItemsGlobal,
    createdProduct,
    getProducts,
    getIdProductCurrent,
    getIdProductItemCurrent,
    getProductitems,
    createdProductItem,
    getSoldAndRemain,
  };
  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
