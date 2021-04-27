import * as actions from "../../constant/actionTypes";
import products from "../../data/products.json";

const initialState = {
  product: {},
  filteredProducts: [],
  products
};

const productsReducer = (state = initialState, action) => {
  let value, filteredValues;
  switch (action.type) {
    case actions.PRODUCT:
      return {
        ...state,
        product: products.find((product) => product.id === parseInt(action.id)),
      };
    case actions.FETCH_PRODUCT_BY_SEARCH_TEXT:
      value = action.payload;
      filteredValues = products.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase());
      });
      return {
        ...state,
        filteredProducts: filteredValues,
      };
    case actions.FETCH_PRODUCT_BY_CATEGORY:
      value = action.payload;
      filteredValues = products.filter((product) => {
        return product.category.toLowerCase().includes(value.toLowerCase());
      });
      return {
        ...state,
        filteredProducts: filteredValues,
      };
    default:
      return state;
  }
};

export default productsReducer;
