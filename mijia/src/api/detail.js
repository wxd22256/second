import axios from "./axios";
function getDetail(gid){
    return axios.post("/detail/"+gid)
}
function getColl(gid){
    return axios.get("/collection/"+gid)
}
export default {
    getDetail,
    getColl
}