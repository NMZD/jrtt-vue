<template>
  <div class="container" id="app">
      <div class="g-df g-fdc b-h100">
          <div class="g-f1 g-content">
              <div class="g-user-info">
                  <h2 class="user-info-tooltip f-tac">登录推荐更精彩</h2>
                  <div class="g-df login-way g-alc g-jcc">
                      <span class="login-way-item" @click="mobileLogin()"><i class="iconfont icon-shouji"></i></span>
                      <span class="login-way-item"><i class="iconfont icon-weixin"></i></span>
                      <span class="login-way-item"><i class="iconfont icon-QQ"></i></span>
                      <span class="login-way-item"><i class="iconfont icon-weibo"></i></span>
                      <span><i class="iconfont icon-arrowright"></i></span>
                  </div>
                  <div class="user-readingTime">
                      <i class="iconfont icon-yueduliang"></i>今日阅读<span>12分钟</span>
                  </div>
                  
              </div>
              <div class="g-df user-stat">
                  <a href="">
                      <i class="iconfont icon-shoucang"></i>
                      <h2>收藏</h2>
                  </a>
                  <a href="">
                      <i class="iconfont icon-lishi"></i>
                      <h2>历史</h2>
                  </a>
                  <a href="">
                      <i class="iconfont icon-yejianmoshi"></i>
                      <h2>夜间</h2>
                  </a>
              </div>   
              <ul class="user-action-list">
                  <li>
                      <h3 class="user-action-title">我的关注</h3>
                      <i class="iconfont icon-arrowright"></i>
                  </li>
                  <li>
                      <h3 class="user-action-title">消息通知</h3>
                      <i class="iconfont icon-arrowright"></i>
                  </li>                    
              </ul> 
              <ul class="user-action-list">
                  <li>
                      <h3 class="user-action-title">头条商城</h3>
                      <span>邀请好友得200元现金奖励</span>
                      <i class="iconfont icon-arrowright"></i>
                  </li>
                  <li>
                      <h3 class="user-action-title">京东特供</h3>
                      <span>京东全球好物节</span>
                      <i class="iconfont icon-arrowright"></i>
                  </li>                    
              </ul> 
              <ul class="user-action-list">
                  <li>
                      <h3 class="user-action-title">我要爆料</h3>
                      <i class="iconfont icon-arrowright"></i>
                  </li>
                  <li>
                      <h3 class="user-action-title">用户反馈</h3>
                      <i class="iconfont icon-arrowright"></i>
                  </li> 
                  <li>
                      <h3 class="user-action-title">系统设置</h3>
                      <i class="iconfont icon-arrowright"></i>
                  </li>                                        
              </ul>

          </div>
          <div class="g-df g-footer">
              <a href="">
                  <i class="iconfont icon-shouye"></i>
                  <h2>首页</h2>
              </a>
              <a href="">
                  <i class="iconfont icon-bofang"></i>
                  <h2>西瓜视频</h2>
              </a>                
              <a href="">
                  <i class="iconfont icon-icon"></i>
                  <h2>微头条</h2>
              </a>                
              <a href="">
                  <i class="iconfont icon-yonghu"></i>
                  <h2>未登录</h2>
              </a>                
          </div>
      </div>

      <div class="g-df g-fdc login-popup" v-if="loginIsShow">
          <i class="login-p-close iconfont icon-guanbi" @click="loginIsShow=false"></i>
          <h2 class="login-popup-tooltip">登录你的头条，精彩永不丢失</h2>
          <div class="g-f1 login-main">
              <div class="login-item">
                  <input type="text" name="">
                  <span class="login-item-text">获取验证码</span>
              </div>
              <div class="login-item">
                  <input type="text" name="">
              </div> 
              <p class="login-tooltip-s">未注册手机验证后自动登录</p>  
              <div class="login-btn">进入头条</div>
              <div class="login-agreement">
                  <input type="checkbox" name="">
                  <label>我已阅读并同意"<a href="">用户协议和隐私条款</a>"</label>
              </div> 
              <p class="toggle-login-way" @click="passLogin=!passLogin">账号密码登录</p>
                
          </div>
          <div class="login-popup-way">
              <span class="login-way-item"><i class="iconfont icon-weixin"></i></span>
              <span class="login-way-item"><i class="iconfont icon-QQ"></i></span>
              <span class="login-way-item"><i class="iconfont icon-weibo"></i></span>
              <span class="login-way-item"><i class="iconfont icon-weixin"></i></span>
            
          </div>           
      </div>

      <div class="g-df g-fdc login-popup" v-if="passLogin">
          <i class="login-p-close iconfont icon-guanbi" @click="loginIsShow=false,passLogin=false"></i>
          <h2 class="login-popup-tooltip">账号密码登录</h2>
          <div class="g-f1 login-main">
              <div class="login-item">
                  <input type="text" name="" v-model="username">
              </div>
              <div class="login-item">
                  <input type="text" name="" v-model="password">
                  <span class="login-item-text">找回密码</span>
              </div> 
              <p class="login-tooltip-s">{{ loginErr }}</p> 
              <div class="login-btn" @click="passlogin()" :class="{enable: enableLoginBtn}">进入头条</div>
              <div class="login-agreement">
                  <input type="checkbox" name="" v-model="agreeTerms">
                  <label>我已阅读并同意"<a href="">用户协议和隐私条款</a>"</label>
              </div> 
              <p class="toggle-login-way" @click="passLogin=!passLogin">免密码登录</p>
                
          </div>
          <div class="login-popup-way">
              <span class="login-way-item"><i class="iconfont icon-weixin"></i></span>
              <span class="login-way-item"><i class="iconfont icon-QQ"></i></span>
              <span class="login-way-item"><i class="iconfont icon-weibo"></i></span>
              <span class="login-way-item"><i class="iconfont icon-weixin"></i></span>
          </div>           
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
        passLogin: false,
        loginIsShow: false,
        username: '',
        password: '',
        agreeTerms: false,
        loginErr: ''
    }
  },
  methods: {
      mobileLogin: function(){
          this.loginIsShow = true;
      },
      passlogin: function(msg){
          if(this.agreeTerms){  //判断是否选中条款
              if(this.username == 'test' && this.password == 'test'){  //验证用户名密码
                  this.loginErr = ''
                  this.passLogin = false;
                  this.loginIsShow = false;
              }else {
                  this.loginErr = '账号或密码错误'
              }
          } else {
              return false;
          }
          
      }
  },
  mounted: function(){
      axios.get('json/login.json').then(function(response){
          console.log(response.data);
      }).catch(function(err){
          console.log(err);
      })
  },
  computed: {
      enableLoginBtn: function(){
          if(this.username != '' && this.password != '' && this.agreeTerms == true ){
              return true;
          } else {
              return false;
          }
      }
  }
}
</script>

<style>

</style>
