import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../components/user.vue'

const Home = {template: '<div>首页</div>'}

Vue.use(VueRouter);

const routes = [
    { path: '/user', component: User },
    { path: '/home', component: Home },
    { path: '*', redirect: '/home' },
]
  
export default new VueRouter({
    mode: 'history',
    routes
})

