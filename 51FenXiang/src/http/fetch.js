import axios from 'axios'
import Vue  from 'vue'
import { Indicator,Toast } from 'mint-ui';
const server = axios.create({
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'Content-Type':'application/json;charset=UTF-8'
  // }
})
server.defaults.timeout =  6000;

if (process.env.NODE_ENV === 'development') {
  server.defaults.baseURL = 'http://www.my51share.com/'
  // 47.106.110.95/
  // http://192.168.31.112:8080/
} else if (process.env.NODE_ENV === 'production') {
  server.defaults.baseURL = 'http://www.my51share.com/'
}
// Add a request interceptor 添加请求拦截机
server.interceptors.request.use(config => {
  // Do something before request is sent
  // config.headers['common']['Content-Type'] = 'application/json;charset=UTF-8';
  Indicator.open();
  return config;
}, err => {
  setTimeout(() => {
    Indicator.close();
    Toast({
      message: '加载超时',
      position: 'middle',
      duration: 2000
    });
  }, 1000)
  return Promise.reject(error)
});


// http响应拦截器
server.interceptors.response.use(res=> {// 响应成功关闭loading
  Indicator.close();
  return res
}, error => {
  setTimeout(() => {
    Indicator.close();
    Toast({
      message: error.message,
      position: 'middle',
      duration: 2000
    });
  },1000)
  return Promise.reject(error)
})
/*server.interceptors.response.use(function (response) {
  // Do something with response data
  Indicator.close();
  return response;
}, function (error) {
  Indicator.close();
  console.log(error);
  // Do something with response error
  return Promise.reject(error);
});*/
export default server
