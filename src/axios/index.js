import Vue from 'vue'
import Axios from  'axios'

// 基本配置信息
// Axios.defaults.baseURL = 'https://api.example.com';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 拦截器
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config=>{
  //   config.headers = {
  //     'Content-Type':'application/x-www-form/urlencoded'
  //   }
  // }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default Axios
