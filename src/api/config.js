import axios from 'axios'

axios.defaults.baseURL = process.env.REQUEST_PREFIX;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(res => res.data);

export default axios;

//export const serverAdder="http://127.0.0.1:8080";
export const serverAdder="http://47.103.211.234:8080";
