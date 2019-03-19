// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './axios'
import VueJsonp from 'vue-jsonp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueJsonp)

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

import './common/style/reset.css'

//图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad,{
  loading: require('assets/logo.png'),//在js 中通过require 加载图片
  attempt: 1
})
// 图片的使用
// static  需要用根路径 /static/xxx/xxx.png
// 在asset 需要引入 或者直接写相对路径   会将图片编译成base64
/* eslint-disable no-new */




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
