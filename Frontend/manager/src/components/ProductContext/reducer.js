import { CREATE_PRODUCT, INIT_PRODUCT } from "./constant";
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
    default:
      return state;
  }
};
export default reducer;
