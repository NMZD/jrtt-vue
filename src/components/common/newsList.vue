<template>
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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data(){
            return {
                pages: 1,
                loading: false,
                newsList: [
                    // {
                    //     title: '',
                    //     source: '',
                    //     commentCount: '',
                    //     isHot: false,
                    //     imgUrl: '',
                    //     pages: 1
                    // }
                ]
            }
        },
        created(){
            this.getNews(this.pages);
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
                        _self.pages++;
                        _self.getNews(_self.pages);
                    },2000);
                }
            },
            getNews: function(pages){
                let _self = this;
                Axios.get('http://localhost:9999/json/news.json').then(function(response){
                    let data = response.data.data
                    for (let i = (pages-1) * 8; i < pages * 8; i++) {
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