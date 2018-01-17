<template>
    <div class="g-df g-fdc b-h100">
        <Head :searchText="searchText">
            <div class="top-menu g-df g-alc">
                <div class="top-menu-list">
                    <a href="">关注</a>
                    <a class="active" href="">推荐</a>
                    <a href="">视频</a>
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
        <div class="g-f1 f-oya">
            
            <ul class="news-list">
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
                newsList: [
                    // {
                    //     title: '',
                    //     source: '',
                    //     commentCount: '',
                    //     isHot: false,
                    //     imgUrl: ''
                    // }
                ]
            }
        },
        components: {
            Head
        },
        mounted(){
            var _self = this;
            Axios.get('./json/news.json').then(function(response){
                let data = response.data.data
                console.log(data);
                for (let i = 0; i < 8; i++) {
                    _self.newsList.push({
                        title: data[i].title,
                        source: data[i].source,
                        isHot: data[i].hot,
                        imgUrl: data[i].image_url,
                        commentCount: data[i].comment_count
                    })
                }
            })
            console.log(this)
        }
    }
</script>
