import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Axios from 'axios'
// 导入css
import './assets/css/zd_base.css'
import './assets/css/zd_common.css'
import './assets/css/zd_page.css'
import './assets/css/animate.css'
import './assets/iconfont/iconfont.css'
// 导入js
import './assets/js/setFont'
import './assets/js/common'

// 导入json文件
import './json/login.json'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
