import axios from "./axios"
function getTaste(option){
    return axios.post("/savour",option)
}
export default {
    getTaste
}