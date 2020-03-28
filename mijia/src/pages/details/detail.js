import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import actions from "../../store/actions";
import "./detail.less"
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            changeDetail:props.changeDetail,
            changeColl:props.changeColl,
            pathname:props.location.search.slice(1)
        }
    }
    componentDidMount(){
        this.state.changeDetail(this.state.pathname);
        this.state.changeColl(this.state.pathname);
    }
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return <div className="detail_box">
            <a onClick={this.goBack}>←</a>
            <Link to="/">✉</Link>
            {this.props.detail&&this.props.detail.err!=1?
                <div className="detail">
                    <div>
                        <img src={this.props.detail.url}></img>
                        <h2>{this.props.detail.title}</h2>
                        <p>{this.props.detail.describe}</p>
                        <h3>¥{this.props.detail.price}</h3>
                    </div>
                    <ul className="list">
                        <li onClick={this.collection} className="active" ref="collection">收藏</li>
                        <li onClick={this.cart}>购物车</li>
                        <li onClick={this.toUser}>立即购买</li>
                        <li onClick={this.add}>加入购物车</li>
                    </ul>
                </div>
                : <div className="noFound">
                    <h2>没有找到相关数据</h2>
                </div>
            }
        </div>
    }
}
export default connect(state => state.detail, actions.detail)(Detail);