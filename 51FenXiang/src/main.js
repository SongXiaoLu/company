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
// import VuePreview from 'vue-preview'
// Vue.use(VuePreview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })
// import vuePicturePreview from 'vue-picture-preview'
// Vue.use(vuePicturePreview)
// import Vue2Preview from 'vue2-preview'
// Vue.use(Vue2Preview)
// import preview from 'vue-photo-preview' // 图片全屏缩放预览
// import 'vue-photo-preview/dist/skin.css'
Vue.use(Mint)
// Vue.use(preview)
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
