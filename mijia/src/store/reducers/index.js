import { combineReducers } from "redux";
import homeReducer from "./home"
import classify from "./classify"
import taste from "./taste"
import detail from "./detail"
let reducer = combineReducers({
    homeReducer,
    classify,
    taste,
    detail
})
export default reducer;
