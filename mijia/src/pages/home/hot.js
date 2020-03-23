import React from "react";
import "./hot.less"
import More from "./more"
import { connect } from "react-redux";
import actions from "../../store/actions/index"
function Hot(props) {
    let { hotData, queryHot } = props;
    if (!hotData) {
        queryHot();
    }
    console.log(hotData);
    return <div className="recommend">
        {hotData ? <div><More title="推荐" link="/recommend"></More>
            <div className="first">
                <img src={hotData[0].title}></img>
                <img src={hotData[0].describe}></img>
            </div>
            <ul className="list">
                {hotData.slice(1).map((item,index)=>{
                    return <li key={index}>
                        <img src={item.url}></img>
                    </li>
                })}
            </ul>
            </div> : null}
    </div>
}
export default connect(state => state.homeReducer, actions.home)(Hot);