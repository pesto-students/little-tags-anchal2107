import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import profileReducer from './reducers/profileReducer';
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  profileReducer,
});

const store = createStore(rootReducer);

export default store;
