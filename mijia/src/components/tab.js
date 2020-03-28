import React from "react";
import { NavLink ,withRouter} from "react-router-dom";
import "./tab.less"
function Tab(props) {
    let pathname = props.location.pathname;
<<<<<<< HEAD
    let flag = /(search)|(detail)/.test(pathname);
    if(flag) {
        return null;
    }
=======
    
    let flag = /search|notlogin/.test(pathname);
    if(flag) {
        return null;
    }
    
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
    return <div className="tab" >
        <NavLink className="link" to="/home">
            <i className="icon"></i>
            <span>首页</span>
        </NavLink>
        <NavLink className="link" to="/classify">
            <i className="icon"></i>
            <span>分类</span>
        </NavLink>
        <NavLink className="link" to="/taste">
            <i className="icon"></i>
            <span>品味</span>
        </NavLink>
        <NavLink className="link" to="/cart">
            <i className="icon"></i>
            <span>购物车</span>
        </NavLink>
        <NavLink className="link" to="/personal">
            <i className="icon"></i>
            <span>个人</span>
        </NavLink>


    </div>
}
export default withRouter(Tab);