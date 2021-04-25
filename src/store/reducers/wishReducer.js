import * as actions from "../../constant/actionTypes";
import * as localStorages from "../../constant/localStorage";
let initialState = {
  products: [],
  productsCount: 0,
};
const wishReducer = (state = initialState, action) => {
  let localData;
  switch (action.type) {
    case actions.ADD_TO_WISH_LIST:
      const { product, size } = action.payload;
      const checkForExistingProduct = state.products.find(
        (p) => p.id === product.id
      );
      if (checkForExistingProduct) {
        localStorage.setItem(localStorages.WISHLIST, JSON.stringify(state));
        return state;
      } else {
        product.size = size;
        const productsCount = state.products.length + 1;
        localData = {
          ...state,
          products: [...state.products, product],
          productsCount,
        };
        localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
        return localData;
      }
    case actions.REMOVE_FROM_CART:
      const filteredProduct = state.products.filter(
        (p) => p.id !== action.payload
      );
      const productsCount = filteredProduct.length;
      localData = {
        ...state,
        products: filteredProduct,
        productsCount,
      };
      localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
      return localData;
    case actions.RESET_CART:
      localStorage.removeItem(localStorages.WISHLIST);
      return {
        products: [],
        productsCount: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
export default wishReducer;
