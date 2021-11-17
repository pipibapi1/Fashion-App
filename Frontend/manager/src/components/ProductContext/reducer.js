import {
  CREATE_PRODUCT,
  INIT_PRODUCT,
  CREATE_PRODUCT_ITEM,
  INIT_PRODUCT_ITEM,
  ADD_SOLD_REMAINING,
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
        productItemsGlobal: [...state.productItems, payload],
      };
    case INIT_PRODUCT_ITEM:
      return {
        ...state,
        productItemsGlobal: payload,
      };
    case ADD_SOLD_REMAINING:
      const { sold, remaining, idProduct } = payload;
      // const product = state.products.find(
      //   (product) => product.id === idProduct
      // );
      const products = [...state.products];
      const index = products.findIndex((product) => product.id === idProduct);
      if (index > -1) {
        products[index] = {
          ...products[index],
          sold,
          remaining,
        };
      }
      console.log(index);
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
    default:
      return state;
  }
};
export default reducer;
