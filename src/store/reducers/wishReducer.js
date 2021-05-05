import * as actions from "../../constant/actionTypes";
import * as localStorages from "../../constant/localStorage";

let initialState = {
  uid: "",
  products: [],
  productsCount: 0,
};
if (localStorage.getItem(localStorages.WISHLIST)) {
  initialState = JSON.parse(localStorage.getItem(localStorages.WISHLIST));
}
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
      let productsCount = filteredProduct.length;
      localData = {
        ...state,
        products: filteredProduct,
        productsCount,
      };
      localStorage.setItem(localStorages.WISHLIST, JSON.stringify(localData));
      return localData;
    case action.REFRESH_WISH_LIST:
      const { listProduct, userUID, pCount } = action.payload;
        localData = {
          products: listProduct,
          productsCount: pCount,
          uid: userUID,
        }      
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
