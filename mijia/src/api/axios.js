import axios from "axios";
import qs from "qs"
axios.defaults.baseURL="http://127.0.0.1:9999";
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest=data=>qs.stringify(data)
axios.interceptors.response.use(response=>{
    return response.data
})
export default axios;