import api from "../../api/index";
import * as types from "../actions-type"
let tasteAction = {
    taste(option){
        return async dispatch=>{
            let data = await api.taste.getTaste(option);
                dispatch({type:types.TASTE_INIT,savour:data.savour});
        }
    }
}
export default tasteAction;