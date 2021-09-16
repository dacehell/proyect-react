import { combineReducers } from "redux";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";
import { loginReducer } from "./login";

const rootReducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  login: loginReducer,
});
export default rootReducer;
