<template>
  <div class="container" id="app">
      <div class="g-df g-fdc b-h100">
          <div class="g-f1 g-content">
            <router-view></router-view>
            
          </div>
          <div class="g-df g-footer">
              <router-link to="/home">
                  <i class="iconfont icon-shouye"></i>
                  <h2>首页</h2>
              </router-link>
              <a href="">
                  <i class="iconfont icon-bofang"></i>
                  <h2>西瓜视频</h2>
              </a>                
              <a href="">
                  <i class="iconfont icon-icon"></i>
                  <h2>微头条</h2>
              </a>
              <router-link to="/user">
                  <i class="iconfont icon-yonghu"></i>
                  <h2>未登录</h2>
              </router-link>
                             
          </div>
      </div>
  </div>
</template>

<script>

export default {

};


</script>

<style>

</style>
