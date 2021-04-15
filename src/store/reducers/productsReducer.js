import * as actions from "../../constant/actionTypes";
import products from "../../data/products.json"

const initialState = {
  products,
  product: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCT:
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
