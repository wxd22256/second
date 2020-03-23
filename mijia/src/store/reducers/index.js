import { combineReducers } from "redux";
import homeReducer from "./home"
import classify from "./classify"
let reducer = combineReducers({
    homeReducer,
    classify
})
export default reducer;
