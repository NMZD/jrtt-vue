<template>
    <div class="g-df g-fdc b-h100">
        <Head :searchText="searchText">
            <div class="top-menu g-df g-alc">
                <div class="top-menu-list" id="top-menu-list">
                    <a :class="isActive('default')" href="/home">推荐</a>
                    <a :class="isActive('vedio')" href="/home/vedio">视频</a>
                    <a :class="isActive('hot')" href="/home/hot">热点</a>
                    <a href="">社会</a>
                    <a href="">娱乐</a>
                    <a href="">军事</a>
                    <a href="">科技</a>
                    <a href="">汽车</a>
                    <a href="">体育</a>
                    <a href="">财经</a>
                </div>
                <span class="top-menu-more"><i class="iconfont icon-jia"></i></span>
            </div>
        </Head>
        <router-view></router-view>
        
    </div>
</template>

<script>
    import Head from './common/header.vue'
    import Axios from 'axios'
    export default {
        data(){
            return {
                searchText: '首页搜索内容',
                activeLink: '',
            }
        },
        components: {
            Head
        },
        mounted(){
            var menuList = document.getElementById('top-menu-list').getElementsByTagName('a');
            console.log(this.$route.name);
            this.activeLink = this.$route.name;
        },
        methods: {
            isActive: function(item){
                if (this.activeLink == item) {
                    return 'active';
                }
            }
        }
    }
</script>
