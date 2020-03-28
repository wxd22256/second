import React from "react";
import "./menu.less"
function Menu(props){
    let {activity=[]} = props;
    return <div className="link-box">
        {activity.map((item,index)=>{
            return <div key={index} className="react-view">
                <img src={item.url}></img>
            </div>
        })}
    </div>
}
export default Menu;