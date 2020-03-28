import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/home";
import Classify from "./classify/classify";
import Taste from "./taste/taste";
import Personal from "./personal/personal";
import Cart from "./cart/cart"
import Tab from "../components/tab"
<<<<<<< HEAD
import Search from "./search/search"
import Detail from "./details/detail"
=======
import Search from "../pages/search/search"
import NotLogin from "../pages/notlogin/notlogin"
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
import "../assets/css/reset.min.css";
import "../assets/css/common.less"
class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/classify" component={Classify}></Route>
                <Route path="/taste" component={Taste}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/personal" component={Personal}></Route>
<<<<<<< HEAD
                <Route path="/detail" component={Detail}></Route>
                <Route path = "/search" component={Search}></Route>
=======
                <Route path = "/search" component={Search}></Route>
                <Route path = "/notlogin" component={NotLogin}></Route>
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
                <Redirect to="/"></Redirect>
            </Switch>
            <Tab></Tab>
        </HashRouter>
    }
}
export default App;