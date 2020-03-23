import axios from "./axios"
function quertInit(){
    return axios.post("/init")
}
function queryMain(id="G0001"){
    return axios.post("/main",{id})
}
export default {
    quertInit,
    queryMain
}