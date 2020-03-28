import * as types from "../actions-type"
let initState = {
    sliders:null
};
function homeReducer(state=initState,action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.HOME_INIT:
            let {sliders,activity} = action.initData;
            state.sliders = sliders;
            state.activity = activity;
            break;
        case types.HOME_HOT:
            state.hotData = action.data;
            break;
    }
    return state
}
export default homeReducer