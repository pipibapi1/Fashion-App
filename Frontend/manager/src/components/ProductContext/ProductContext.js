import { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  CREATE_PRODUCT,
  INIT_PRODUCT,
  CREATE_PRODUCT_ITEM,
  INIT_PRODUCT_ITEM,
  ADD_SOLD_REMAINING,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ITEM_ALL,
  ADD_ITEM_PRODUCT,
  LOADED,
} from "./constant";
export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [stateProduct, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    productItemsGlobal: [],
  });
  const { products, productItemsGlobal, loading } = stateProduct;
  const createdProduct = async (data) => {
    try {
      await axios.post("http://localhost:3000/product", data);
      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      });

      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/product/${id}`);
      if (res.data.success) {
        deleteProductItemAll(id);
        // dispatch({
        //   type: DELETE_PRODUCT,
        //   payload: id,
        // });
        getProducts();
      }
    } catch (error) {}
  };
  const deleteProductItemAll = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/productitem/${id}`);
      if (res.data.success) {
        // dispatch({
        //   type: DELETE_PRODUCT_ITEM_ALL,
        //   payload: id,
        // });
        getProductitems();
      }
    } catch (error) {}
  };
  const deleteProductItem = async (idProduct, idItem) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/productitem/${idProduct}/${idItem}`
      );
      if (res.data.success) {
        getItemForProduct(idProduct);
        getSoldAndRemain(idProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateProduct = async (id, dataForm) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/product/${id}`,
        dataForm
      );
      if (res.data.success) {
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateProductItem = async (idProduct, idItem, data) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/productitem/${idProduct}/${idItem}`,
        data
      );
      if (res.data.success) {
        getItemForProduct(idProduct);
        getSoldAndRemain(idProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getIdProductCurrent = () => {
    if (products.length > 0) return products[products.length - 1].id;
    return -1;
  };
  const getIdProductItemCurrent = () => {
    // if (productItemsGlobal.length > 0)
    //   return productItemsGlobal[productItemsGlobal.length - 1].id;

    let res = Number(-1);
    let idItem;
    for (let x of productItemsGlobal) {
      idItem = Number(x.id.slice(2));
      // console.log(idItem, "---", res);
      if (res < idItem) {
        res = idItem;
      }
    }
    return res + 1;
    // return -1;
  };
  const Loaded = () => {
    dispatch({
      type: LOADED,
      payload: true,
    });
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
        // console.log(products);
        // Loaded();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getItemForProduct = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/productitem/${id}`);
      if (res.data.success) {
        dispatch({
          type: ADD_ITEM_PRODUCT,
          payload: { id, data: res.data.productItems },
        });
      }
    } catch (error) {}
  };
  const createdProductItem = async (data, idProduct) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/productitem/${idProduct}`,
        data
      );
      if (res.data.success) {
        dispatch({
          type: CREATE_PRODUCT_ITEM,
          payload: res.data.productItem,
        });
        getItemForProduct(idProduct);
        getSoldAndRemain(idProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProductById = (id) => {
    // getProducts();

    let index = products.findIndex((product) => product.id === id);
    while (index < 0) {
      index = products.findIndex((product) => product.id === id);
    }
    return products[index];
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
      Loaded();
    } catch (error) {
      console.log(error);
    }
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
        for (let x of res.data.products) {
          getItemForProduct(x.id);
          getSoldAndRemain(x.id);
        }
        // Loaded();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const productValue = {
    products,
    loading,
    productItemsGlobal,
    createdProduct,
    getProducts,
    getIdProductCurrent,
    getIdProductItemCurrent,
    getProductitems,
    createdProductItem,
    getSoldAndRemain,
    deleteProduct,
    getProductById,
    Loaded,
    deleteProductItem,
    updateProduct,
    updateProductItem,
  };
  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
