import React from "react";
import "./header.less";
import { withRouter } from "react-router-dom"
function Header(props) {

    return <div className="main-header">
        <div className="logo-box">
            <img src={require('../../assets/images/navi_title_v2.png')}></img>
        </div>
        <div className="search-box" onClick={() => {
            props.history.push("/search")
        }}>
            <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_search_v5.png"></img>
            <span>年货嗨抢,最高直降1000</span>
        </div>
        <div className="msg-box">
            <div className="msg"></div>
        </div>
    </div>
}
export default withRouter(Header);