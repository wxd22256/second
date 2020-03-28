import React from "react";
<<<<<<< HEAD
import { connect } from "react-redux"
import actions from "../../store/actions/index"
import "./taste.less"
function Taste(props) {
    let { savour, taste } = props;
    let option = { offset: 0, limit: 1 }
    if (!savour) {
        taste(option);
    }
    return <div className="container">
        <h3>品味</h3>
        {savour?<ul>
            {savour.map((item, index) => {
                return <li key={index}>
                    <img src={item.pic_url}></img>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                    <a href={item.url}>去发现</a>
                </li>
            })}
        </ul>:null}
    </div>
}
export default connect(state => state.taste, actions.taste)(Taste);
=======
function Taste(){
    return <div></div>
}
export default Taste;
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
