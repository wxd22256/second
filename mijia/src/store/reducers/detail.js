import * as types from "../actions-type";
let initState = {
    detail:null
}
function reducer(state=initState,action){
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case types.GOOD_DETAIL:
            let {detail} = action;
            state.detail = detail; 
    }
    return state;
}
export default reducer;