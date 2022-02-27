import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userData from './userData'
export default combineReducers({
  auth,
  userData,
  message,
});