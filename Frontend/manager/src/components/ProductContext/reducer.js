import {
  CREATE_PRODUCT,
  INIT_PRODUCT,
  CREATE_PRODUCT_ITEM,
  INIT_PRODUCT_ITEM,
  ADD_SOLD_REMAINING,
  ADD_ITEM_PRODUCT,
  LOADED,
} from "./constant";
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case INIT_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case CREATE_PRODUCT_ITEM:
      return {
        ...state,
        productItemsGlobal: [...state.productItemsGlobal, payload],
      };
    case INIT_PRODUCT_ITEM:
      return {
        ...state,
        productItemsGlobal: payload,
      };
    case ADD_SOLD_REMAINING:
      const { sold, remaining, idProduct } = payload;
      const products = [...state.products];
      const index = products.findIndex((product) => product.id === idProduct);
      if (index > -1) {
        products[index] = {
          ...products[index],
          sold,
          remaining,
        };
      }
      // product = {
      //   ...product,
      //   sold,
      //   remaining,
      // };
      // if (index > -1) {
      //   products.slice(index, 1);
      //   products.insert(index, product);
      // }
      return {
        ...state,
        products: products,
      };
    case ADD_ITEM_PRODUCT:
      const productsAddItem = [...state.products];
      const indexAddItem = productsAddItem.findIndex(
        (product) => product.id === payload.id
      );
      if (indexAddItem > -1) {
        productsAddItem[indexAddItem] = {
          ...productsAddItem[indexAddItem],
          items: payload.data,
        };
      }
      return {
        ...state,
        products: productsAddItem,
      };
    case LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
