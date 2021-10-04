import { combineReducers } from "redux";
import auth_reducer from "./auth";
import message_reducer from "./message";


export default combineReducers({ auth_reducer, message_reducer });