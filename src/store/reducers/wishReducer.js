import * as actions from "../../constant/actionTypes";
import * as localStorages from "../../constant/localStorage";

let initialState = {
  uid: "",
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
        let products = [...state.products, product];
        let productsCount = state.products.length + 1;

        localData = {
          ...state,
          products,
          productsCount,
        };
        localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
        return localData;
      }
    case actions.REMOVE_FROM_WISH_LIST:
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
    case action.REFRESH_WISH_LIST:
      let products = action.products;
      let productsCount1 = state.products.length + 1;
      localData = {
        ...state,
        products: [...products],
        productsCount1,
      };
      localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
      return localData;
    case actions.UPDATE_WISH_LIST_COUNT:
      localData = {
        ...state,
        productsCount: action.productsCount,
      };
      localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
      return localData;
    case actions.RESET_WISH_LIST:
      localStorage.removeItem(localStorages.WISHLIST);
      return {
        uid: "",
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
