import { combineReducers } from "redux";
import homeReducer from "./home"
import classify from "./classify"
<<<<<<< HEAD
import taste from "./taste"
import detail from "./detail"
let reducer = combineReducers({
    homeReducer,
    classify,
    taste,
    detail
=======
let reducer = combineReducers({
    homeReducer,
    classify
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
})
export default reducer;
