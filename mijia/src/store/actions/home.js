import * as types from "../actions-type"
import api from "../../api/index"
let homeAction = {
    init(){
        return async dispatch=>{
            let data = await api.home.quertInit();
            dispatch({type:types.HOME_INIT,initData:data})
        }
    },
    queryHot(id){
        return async dispatch=>{
            let data = await api.home.queryMain(id);
            dispatch({type:types.HOME_HOT,data:data})
        }
    }
}
export default homeAction;