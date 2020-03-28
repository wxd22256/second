import * as types from "../actions-type"
import api from "../../api/index"
let detailAction = {
    changeDetail(gid){
        return async dispatch=>{
            let data = await api.detail.getDetail(gid);
            dispatch({type:types.GOOD_DETAIL,detail:data})
        }
    },
    changeColl(gid){
        return async dispatch=>{
            let data = await api.detail.getColl(gid);
            console.log(data);
            dispatch({type:types.GOOD_COLL})
        }
    }
}
export default detailAction;