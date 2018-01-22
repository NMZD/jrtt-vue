<template>
    <div class="vedio-list-box" id="vedio-list-box" @scroll="vedioScroll">
        <div class="vedio-list" id="vedio-list">
            <a href="" v-for="item in vedioList">
                <div class="vedio-detail">
                    <h2 class="vedio-title">{{ item.title }}</h2>
                    <img :src="item.imgUrl" alt="">
                    <span class="vedio-btn"></span>
                </div>
                
                <div class="vedio-info">
                    <span>{{ item.source }}</span>
                    <span>评论 {{ item.commentCount }}</span>
                    <span>{{ item.datetime }}</span>
                </div>
            </a>
        </div>
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
import Axios from "axios";
export default {
  data() {
    return {
      pages: 1,
      vedioList: [],
      linkActive: false,
      loading: false
    };
  },
  created() {
    this.getVedio(this.pages);
  },
  methods: {
    vedioScroll: function() {
      let _self = this;
      let vedioBox = document.getElementById("vedio-list-box");
      let vedioList = document.getElementById("vedio-list");
      if (vedioBox.scrollTop == vedioList.clientHeight - vedioBox.clientHeight ) {
        this.loading = true;
        setTimeout(function() {
          _self.loading = false;
          _self.pages++;
          _self.getVedio(_self.pages);
        }, 2000);
      }
    },
    getVedio: function(pages) {
      let _self = this;
      Axios.get("http://localhost:9999/json/vedio.json").then(function(response){
        var data = response.data.data;
        for (let i = (pages - 1) * 6; i < pages * 6; i++) {
          if (i >= data.length) {
            continue;
          }
          _self.vedioList.push({
            title: data[i].title,
            imgUrl: data[i].large_image_url,
            source: data[i].source,
            commentCount: data[i].comment_count,
            datetime: data[i].datetime
          });
        }
      });
    }
  }
};
</script>

<style>
.vedio-list-box {
  -webkit-flex: 1;
  flex: 1;
  overflow-y: auto;
}
.vedio-list {
  padding: 0 0.1rem;
  background-color: #fff;
}
.vedio-list a {
  margin-top: 0.1rem;
  display: block;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #ccc;
}
.vedio-list a:last-child {
  border: none;
}
.vedio-list .vedio-detail {
  position: relative;
}
.vedio-list img {
  width: 100%;
}
.vedio-list .vedio-title {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 0.05rem;
  font-size: 0.14rem;
  color: #fff;
  font-weight: normal;
  line-height: 2em;
}
.vedio-list .vedio-btn {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(../../assets/images/vedio_btn.png) no-repeat center
    center/50px;
}
.vedio-list .vedio-info {
  margin-top: 0.06rem;
  font-size: 0.1rem;
  color: #666;
}
</style>
