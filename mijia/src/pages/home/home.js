import React from "react";
import Header from "./header"
import Banner from "../../components/swiper";
import Menu from "./menu";
import Hot from "./hot";
import { connect } from "react-redux"
import actions from "../../store/actions/index"
import "./home.less"
function Home(props) {
    let {sliders,init,activity} = props;
    if(!sliders){
        init();
    }
    return <div className="main-box">
        <Header></Header>
        <div className="main-body">
            <Banner data={sliders}></Banner>
            <Menu activity={activity}></Menu>
            <Hot></Hot>
        </div>
    </div>
}
export default connect(state => state.homeReducer, actions.home)(Home);