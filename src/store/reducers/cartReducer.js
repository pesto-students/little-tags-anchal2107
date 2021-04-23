import * as actions from "../../constant/actionTypes";

let initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  name: "",
  phoneNo: "",
  address: "",
};
if (localStorage.getItem("cart")) {
  initialState = JSON.parse(localStorage.getItem("cart"));
}

const cartReducer = (state = initialState, action) => {
  let fetchProduct, index, localData;
  switch (action.type) {
    case actions.ADD_TO_CART:
      const { product, quantity, size } = action.payload;
      const checkForExistingProduct = state.products.find(
        (p) => p.id === product.id
      );
      if (checkForExistingProduct) {
        localStorage.setItem("cart", JSON.stringify(state));
        return state;
      } else {
        const totalPrice = state.totalPrice + product.price * quantity;
        const totalQuantity = state.totalQuantity + quantity;
        product.quantity = quantity;
        product.size = size;
        localData = {
          ...state,
          products: [...state.products, product],
          totalPrice,
          totalQuantity,
        };
        localStorage.setItem("cart", JSON.stringify(localData));
        return localData;
      }
    case actions.INCRESE_QUANTITY:
      fetchProduct = state.products.find((p) => p.id === action.payload);
      index = state.products.findIndex((p) => p.id === action.payload);
      fetchProduct.quantity += 1;
      state.products[index] = fetchProduct;
      localData = {
        ...state,
        totalPrice: state.totalPrice + fetchProduct.price,
        totalQuantity: state.totalQuantity + 1,
      };
      localStorage.setItem("cart", JSON.stringify(localData));
      return localData;
    case actions.DECRESE_QUANTITY:
      fetchProduct = state.products.find((p) => p.id === action.payload);
      index = state.products.findIndex((p) => p.id === action.payload);
      if (fetchProduct.quantity > 1) {
        fetchProduct.quantity -= 1;
        state.products[index] = fetchProduct;
        localData = {
          ...state,
          totalPrice: state.totalPrice - fetchProduct.price,
          totalQuantity: state.totalQuantity - 1,
        };
        localStorage.setItem("cart", JSON.stringify(localData));
        return localData;
      } else {
        localStorage.setItem("cart", JSON.stringify(state));
        return state;
      }
    case actions.REMOVE_FROM_CART:
      fetchProduct = state.products.find((p) => p.id === action.payload);

      const filteredProduct = state.products.filter(
        (p) => p.id !== action.payload
      );
      localData = {
        ...state,
        products: filteredProduct,
        totalPrice:
          state.totalPrice - fetchProduct.price * fetchProduct.quantity,
        totalQuantity: state.totalQuantity - fetchProduct.quantity,
      };
      localStorage.setItem("cart", JSON.stringify(localData));
      return localData;
    case actions.ADD_SHIP_DETAILS:
      const { name, address, phoneNo } = action.payload;
      localData = {
        ...state,
        name,
        address,
        phoneNo,
      };
      localStorage.setItem("cart", JSON.stringify(localData));
      return localData;
    case actions.RESET_CART:
      localStorage.removeItem("cart");
      return {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
        name: "",
        phoneNo: "",
        address: "",
      };
    default:
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
  }
};

export default cartReducer;
