<template>
    <div class="g-df g-fdc b-h100">
        <Head :searchText="searchText">
            <div class="top-menu g-df g-alc">
                <div class="top-menu-list">
                    <a href="">关注</a>
                    <a class="active" href="">推荐</a>
                    <a href="/home/test">视频</a>
                    <a href="">热点</a>
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
        <div class="g-f1 f-oya" id="news-list-box" @scroll="newsScroll">
            
            <ul class="news-list" id="news-list">
                <li v-for="item in newsList">
                    <a class="news-item-link" href=""> 
                        <div class="news-datail">
                            <h1 class="news-title">{{ item.title }}</h1>
                            <div class="news-info">
                                <span class="hot-label" v-if="item.isHot">热</span>
                                <span class="news-author">{{ item.source }}</span>
                                <span class="comment-count">评论 {{ item.commentCount }}</span>
                            </div>
                        </div>
                        <div class="news-img">
                            <img :src="item.imgUrl" alt="">
                        </div>
                    </a>
                </li>
            </ul>

            <div class="loading" v-if="loading">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>    
            </div> 
            
        </div>
        
    </div>
</template>

<script>
    import Head from './common/header.vue'
    import Axios from 'axios'
    export default {
        data(){
            return {
                searchText: '首页搜索内容',
                page: 1,
                loading: false,
                newsList: [
                    // {
                    //     title: '',
                    //     source: '',
                    //     commentCount: '',
                    //     isHot: false,
                    //     imgUrl: '',
                    //     page: 1
                    // }
                ]
            }
        },
        components: {
            Head
        },
        mounted(){
            this.getNews(this.page);
        },
        methods: {
            newsScroll: function(){
                let _self = this;
                let newsBox = document.getElementById('news-list-box');
                let newsList = document.getElementById('news-list');
                if(newsList.clientHeight - newsBox.clientHeight == newsBox.scrollTop){
                    this.loading = true;
                    setTimeout(function(){
                        _self.loading = false;
                        _self.page++;
                        _self.getNews(_self.page);
                    },2000);
                }
            },
            getNews: function(page){
                let _self = this;
                Axios.get('http://localhost:9999/json/news.json').then(function(response){
                    let data = response.data.data
                    for (let i = (page-1) * 8; i < page * 8; i++) {
                        if( i >= data.length){
                            continue;
                        }
                        _self.newsList.push({
                            title: data[i].title,
                            source: data[i].source,
                            isHot: data[i].hot,
                            imgUrl: data[i].image_url,
                            commentCount: data[i].comment_count
                        })
                    }
                })
            }
        }
    }
</script>
