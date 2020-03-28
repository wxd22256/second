import React from "react";
import "./hot.less"
import More from "./more"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import actions from "../../store/actions/index"
function Hot(props) {
    let { hotData, queryHot } = props;
    if (!hotData) {
        queryHot();
    }
    console.log(hotData);
    return <div className="recommend">
        {hotData ? <div><More title="推荐" link="/recommend"></More>
            <Link to={"/detail/?" + hotData[0].gid}>
                <div className="first">
                    <img src={hotData[0].title}></img>
                    <img src={hotData[0].describe}></img>
                </div>
            </Link>
            <ul className="list">
                {hotData.slice(1).map((item, index) => {
                    return <Link to={"/detail/?" + item.gid} key={index}>
                        <li>
                            <img src={item.url}></img>
                        </li>
                    </Link>
                })}
            </ul>
        </div> : null}
    </div>
}
export default connect(state => state.homeReducer, actions.home)(Hot);