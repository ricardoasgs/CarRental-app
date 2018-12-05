import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
  loginReducer,
  homeReducer,
  detailReducer
});
