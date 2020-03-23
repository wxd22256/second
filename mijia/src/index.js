import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index"
import { Provider } from "react-redux"
import App from "./pages/App"
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById("root"))
// api:存放的项目的所有接口；
// assets:存放的静态资源
// components:页面中的组件
// pages:页面级组件
// store :存放的是数据
//
// 前端: localhost:3000 后端 9999
// 安装一些必备模块
// npm i redux react-redux redux-logger redux-thunk redux-promise axios less less-loader