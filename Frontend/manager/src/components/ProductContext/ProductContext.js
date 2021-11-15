import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import { CREATE_PRODUCT } from "./constant";
export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [stateProduct, dispatch] = useReducer(reducer, {
    products: [],
  });
  const { products } = stateProduct;
  const createdProduct = (data) => {
    try {
      axios.post("http://localhost:3000/product", data);
      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const productValue = {
    products,
    createdProduct,
  };
  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
