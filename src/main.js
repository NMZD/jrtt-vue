import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Axios from 'axios'
// 导入css
import './css/zd_base.css'
import './css/zd_common.css'
import './css/zd_page.css'
import './iconfont/iconfont.css'
import './js/setFont'

// 导入json文件
import './json/login.json'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
