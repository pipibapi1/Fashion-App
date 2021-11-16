import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import { CREATE_PRODUCT, INIT_PRODUCT } from "./constant";
export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [stateProduct, dispatch] = useReducer(reducer, {
    products: [],
  });
  const { products } = stateProduct;
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
  const productValue = {
    products,
    createdProduct,
    getProducts,
    getIdProductCurrent,
  };
  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
