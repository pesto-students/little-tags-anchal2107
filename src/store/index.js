import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import sessionReducer from "./reducers/sessionReducer";
import profileReducer from "./reducers/profileReducer";
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  profileReducer,
  sessionState: sessionReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
