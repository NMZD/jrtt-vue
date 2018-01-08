import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

// 导入css
import './css/zd_base.css'
import './css/zd_common.css'
import './css/zd_page.css'
import './iconfont/iconfont.css'
import './js/setFont'

// 导入json文件
const loginJson = require('./json/login.json')

console.log(loginJson);

new Vue({
  el: '#app',
  render: h => h(App)
})
