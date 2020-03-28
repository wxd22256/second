import * as types from "../actions-type"
import api from "../../api/index"
let homeAction = {
    init(){
        return async dispatch=>{
            let data = await api.home.quertInit();
            dispatch({type:types.HOME_INIT,initData:data})
        }
    },
<<<<<<< HEAD
    queryHot(id){
        return async dispatch=>{
            let data = await api.home.queryMain(id);
=======
    queryHot(){
        return async dispatch=>{
            let data = await api.home.queryMain();
>>>>>>> 83fff4391d6fe6c0b9c1bfb048f87be65b8fc5cb
            dispatch({type:types.HOME_HOT,data:data})
        }
    }
}
export default homeAction;