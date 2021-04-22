import * as actions from "../../constant/actionTypes";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  name: "",
  phoneNo: "",
  address: "",
};

const cartReducer = (state = initialState, action) => {
  let fetchProduct, index;
  switch (action.type) {
    case actions.ADD_TO_CART:
      const { product, quantity, size } = action.payload;
      const checkForExistingProduct = state.products.find(
        (p) => p.id === product.id
      );
      if (checkForExistingProduct) {
        return state;
      } else {
        const totalPrice = state.totalPrice + product.price * quantity;
        const totalQuantity = state.totalQuantity + quantity;
        product.quantity = quantity;
        product.size = size;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice,
          totalQuantity,
        };
      }
    case actions.INCRESE_QUANTITY:
      fetchProduct = state.products.find(
        (p) => p.id === action.payload
      );
      index = state.products.findIndex(
        (p) => p.id === action.payload
      );
      fetchProduct.quantity += 1;
      state.products[index] = fetchProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + fetchProduct.price,
        totalQuantity: state.totalQuantity + 1,
      };
    case actions.DECRESE_QUANTITY:
      fetchProduct = state.products.find(
        (p) => p.id === action.payload
      );
      index = state.products.findIndex(
        (p) => p.id === action.payload
      );
      if (fetchProduct.quantity > 1) {
        fetchProduct.quantity -= 1;
        state.products[index] = fetchProduct;
        return {
          ...state,
          totalPrice: state.totalPrice - fetchProduct.price,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return state;
      }
    case actions.REMOVE_FROM_CART:
      fetchProduct = state.products.find(
        (p) => p.id === action.payload
      );

      const filteredProduct = state.products.filter(
        (p) => p.id !== action.payload
      );
      return {
        ...state,
        products: filteredProduct,
        totalPrice:
          state.totalPrice - fetchProduct.price * fetchProduct.quantity,
        totalQuantity: state.totalQuantity - fetchProduct.quantity,
      };
    case actions.ADD_SHIP_DETAILS:
      const { name, address, phoneNo } = action.payload;
      return {
        ...state,
        name,
        address,
        phoneNo,
      };
    default:
      return state;
  }
};

export default cartReducer;
