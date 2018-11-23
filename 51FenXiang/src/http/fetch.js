import axios from 'axios'
import Vue  from 'vue'
const server = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
if (process.env.NODE_ENV === 'development') {
  server.defaults.baseURL = 'http://192.168.31.112:8080/'
  // 47.106.110.95/
  // http://192.168.31.112:8080/
} else if (process.env.NODE_ENV === 'production') {
  server.defaults.baseURL = 'http://47.106.110.95/'
}
// Add a request interceptor 添加请求拦截机
server.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers['common']['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
});

// Add a response interceptor 添加响应拦截机
server.interceptors.response.use(function (response) {
  // Do something with response data
  if (!response.data.success) {
    // Vue.prototype.$message({
    //   showClose: true,
    //   message: response.data.msg,
    //   type: 'error'
    // });
  }
  return response;
}, function (error) {
  console.log(error);
  // Do something with response error
  return Promise.reject(error);
});
export default server
