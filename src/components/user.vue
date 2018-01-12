<template>
    <div>
        <div class="g-user-info">
             <div class="loggedIn" v-if="loginSuccess">
                <div class="g-df g-alc">
                    <div class="user-avator">
                        <img src="../assets/images/touxiang.jpg" alt="">
                    </div>
                    <h2 class="g-f1 user-name">用户名称</h2>
                    <div class="user-readingTime">
                        <i class="iconfont icon-yueduliang"></i>
                        <span>今日阅读12分钟</span>
                    </div>
                </div>
                <div class="g-df g-alc user-count-box">
                    <a class="user-count" href="">
                        <span class="num" >{{ dynamic }}</span>
                        <span>动态</span>
                    </a>
                    <a class="user-count" href="">
                        <span class="num">{{ concerned }}</span>
                        <span>关注</span>
                    </a>
                    <a class="user-count" href="">
                        <span class="num">{{ fans }}</span>
                        <span>粉丝</span>
                    </a>
                </div>
            </div>
            <div class="notLoggedIn" v-else>
                <h2 class="user-info-tooltip f-tac">登录推荐更精彩</h2>
                <div class="g-df login-way g-alc g-jcc">
                    <span class="login-way-item" @click="mobileLogin()">
                        <i class="iconfont icon-shouji"></i>
                    </span>
                    <span class="login-way-item">
                        <i class="iconfont icon-weixin"></i>
                    </span>
                    <span class="login-way-item">
                        <i class="iconfont icon-QQ"></i>
                    </span>
                    <span class="login-way-item">
                        <i class="iconfont icon-weibo"></i>
                    </span>
                    <span>
                        <i class="iconfont icon-arrowright"></i>
                    </span>
                </div>
                <div class="user-readingTime">
                    <i class="iconfont icon-yueduliang"></i>今日阅读
                    <span>12分钟</span>
                </div>
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

        <div class="quitLogin" v-if="loginSuccess"  @click="quitLogin">退出登录</div>

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
                  <input type="checkbox" name="" v-model="agreeTerms">
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
                  <input type="password" name="" v-model="password">
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
    import axios from "axios";
    import {setStorage, getStorage} from '../assets/js/common.js'
    export default {
        name: "app",
        data() {
            return {
                passLogin: false,
                loginIsShow: false,
                username: "",
                password: "",
                agreeTerms: true,
                loginErr: "",
                loginSuccess: false,
                dynamic: 0,
                concerned: 0,
                fans: 0
            };
        },
        methods: {
            mobileLogin: function() {
                this.loginIsShow = true;
            },
            passlogin: function(msg) {
                let username = "";
                let password = "";
                let _self = this;
                
                if (this.agreeTerms) { //判断是否选中条款
                    axios.get("json/login.json")
                    .then(response => {
                        console.log(response.data);
                        username = response.data.username;
                        password = response.data.password;
                        if (_self.username == username && _self.password == password) {  //验证用户名密码
                            _self.loginErr = "";
                            _self.passLogin = false;
                            _self.loginIsShow = false;
                            _self.loginSuccess = true;
                            _self.dynamic = response.data.dynamic
                            _self.concerned = response.data.concerned
                            _self.fans = response.data.fans
                            setStorage('username',username);
                        } else {
                        _self.loginErr = "账号或密码错误";
                        }
                    })
                    .catch( error => console.log(error));
                } else {
                    return false;
                }
            },
            quitLogin () {
                this.loginSuccess = false;
                setStorage('username','');
            }
        },
        mounted: function() {
            const  _self = this;
            if(getStorage('username')){
                 axios.get("json/login.json")
                .then(response => {
                    _self.dynamic = response.data.dynamic
                    _self.concerned = response.data.concerned
                    _self.fans = response.data.fans
                })
                this.loginErr = "";
                this.passLogin = false;
                this.loginIsShow = false;
                this.loginSuccess = true;
            }
        },
        computed: {
            enableLoginBtn: function() {
                if (
                    this.username != "" &&
                    this.password != "" &&
                    this.agreeTerms == true
                ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    };
</script>