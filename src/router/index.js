import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../components/user.vue'
import Home from '../components/home.vue'
import Test from '../components/common/header.vue'

const WatermelonVedio = {template: '<div>西瓜视频</div>'}
const MicroHeadlines = {template: '<div>微头条</div>'}

Vue.use(VueRouter);

const routes = [
    { 
        path: '/home',
        component: Home,
        children: [
            {
                path: 'test',
                component: Test
            }
        ]
    },
    { path: '/wv', component: WatermelonVedio },
    { path: '/mh', component: MicroHeadlines },
    { path: '/user', component: User },
    { path: '*', redirect: '/home' },
]
  
export default new VueRouter({
    mode: 'history',
    routes
})

