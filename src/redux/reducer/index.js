import { combineReducers } from "redux";
import login from './login';

// 需要放到store的state注册到这里
export default combineReducers({
    login
});