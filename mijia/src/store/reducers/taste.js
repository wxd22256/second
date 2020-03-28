import * as types from "../actions-type";
let initState = {
    savour: null
};
function reducer(state = initState, action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case types.TASTE_INIT:
            let { savour } = action
            state.savour = savour;
            break;
        case types.GOOD_COLL:
            break;
    }
    return state;
}
export default reducer;