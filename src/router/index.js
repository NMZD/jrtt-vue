import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../components/user.vue'
import Home from '../components/home.vue'
import Head from '../components/common/header.vue'
import Recommend from '../components/common/newsList.vue'
import Vedio from '../components/common/vedio.vue'
import Test from '../components/common/header.vue'

const WatermelonVedio = {template: '<div>西瓜视频</div>'}
const MicroHeadlines = {template: '<div>微头条</div>'}

Vue.use(VueRouter);

const routes = [
    { 
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'recommend',
                name: 'recommend',
                component: Recommend
            },
            {
                path: 'vedio',
                name: 'vedio',
                component: Vedio
            },
            {
                path: 'hot',
                name: 'hot',
                component: Recommend
            },
            {
                path: '',
                name: 'default',
                component: Recommend
            }
        ]
    },
    { path: '/wv', component: WatermelonVedio },
    { path: '/mh', component: MicroHeadlines },
    { path: '/user', name: 'user', component: User },
    { path: '*', redirect: '/home' },
]
  
export default new VueRouter({
    mode: 'history',
    routes
})

