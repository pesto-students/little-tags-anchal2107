import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
});

const store = createStore(rootReducer);

export default store;
