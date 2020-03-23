import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducer from "./reducers/index"
let store = createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise));
export default store; store.getState()