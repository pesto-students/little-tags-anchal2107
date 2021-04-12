import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
  productsReducer,
});

const store = createStore(rootReducer);

export default store;
