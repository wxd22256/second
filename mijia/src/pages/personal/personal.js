import React from "react";
<<<<<<< HEAD
function Personal(){
    return <div></div>
}
export default Personal;
=======
import "./personal.less"
import { withRouter } from "react-router-dom"
function Personal(props) {
    return <div >
        <div className="header">
            <img className="header_t" src={require('../../assets/images/icon_default_head_portrait.png')}></img>
            <span onClick={() => {
                props.history.push("/notlogin")
            }}>请登录</span>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div>
        <div className="order_box">
            <span>我的订单</span>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div>
        <div className="content_box">
            <div>
                <img src={require('../../assets/images/personal_icon_paid.png')}></img>
                <span>待付款</span>
            </div>
            <div>
                <img src={require('../../assets/images/personal_icon_receipt.png')}></img>
                <span>待收货</span>
            </div>
            <div>
                <img src={require('../../assets/images/personal_icon_received_goods.png')}></img>
                <span>待评价</span>
            </div>
            <div>
                <img src={require('../../assets/images/personal_icon_return_goods.png')}></img>
                <span>退款订单</span>
            </div>

        </div>
        <div className="foot_box">
            <div>
                <img src={require('../../assets/images/personal_icon_assets.png')}></img>
                <span>我的资产</span>
            </div>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div>
        <div className="foot_box">
            <div>
                <img src={require('../../assets/images/personal_icon_collection.png')}></img>
                <span>我的收藏</span>
            </div>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div> 
         <div className="foot_box">
            <div>
                <img src={require('../../assets/images/personal_icon_address.png')}></img>
                <span>地址管理</span>
            </div>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div> 
         <div className="foot_box">
            <div>
                <img src={require('../../assets/images/set_icon_message_new.png')}></img>
                <span>消息中心</span>
            </div>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div>
          <div className="foot_box">
            <div>
                <img src={require('../../assets/images/personal_icon_feedback.png')}></img>
                <span>帮助与反馈</span>
            </div>
            <img className="header_f" src={require('../../assets/images/std_right_arrow_gray.png')}></img>
        </div>
    </div>

}
export default withRouter(Personal)
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
