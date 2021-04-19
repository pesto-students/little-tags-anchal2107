import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import profileReducer from './reducers/profileReducer';
import sessionReducer from './reducers/sessionReducer';
const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  profileReducer,
  sessionReducer,
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
