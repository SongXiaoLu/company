// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
// 本地新建
import './style/index.css'
import './assets/font.js';
import './utils/index.js'
import api from './http/api';
// 第三方插件
import 'babel-polyfill'
import fastclick from 'fastclick'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import preview from 'vue-photo-preview' // 图片全屏缩放预览
import 'vue-photo-preview/dist/skin.css'
Vue.use(Mint)
Vue.use(preview)
fastclick.attach(document.body)
Vue.prototype.$req = api
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
