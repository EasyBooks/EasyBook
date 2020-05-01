<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading"/>
    </transition>
    <div class="login-page">
      <header class="header">
        <router-link to="/mine" class="close-btn">
          <img src="../assets/image/batch_download_close.png">
        </router-link>
        <router-link to="/register" class="register-btn">注册</router-link>
      </header>
      <main class="main">
        <h2>登录</h2>
        <div class="form">
          <div class="input-box">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input-box">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
        </div>
        <p class="tips">
          {{tips}}
        </p>
        <div class="btn-box">
          <button @click="login" :disabled="loginBtn">登录</button>
          <small>问题帮助</small>
        </div>
      </main>
      <footer class="footer">
        登录注册表示同意xxxx协议
      </footer>
    </div>
  </div>
</template>
<script>
  import {login} from '@/api'
  import {WebSocketAPI} from "../api/websocket"

  export default {
    name: 'login',
    computed: {
      loginBtn() {
        if(this.password.length<6||this.username.length<5){
          return true;
        }
        return false;
      }
    },
    data() {
      return {
        username: '',
        password: '',
        tips: '',
        isLoading: false
      }
    },
    methods: {
      login() {
        this.isLoading = true;
        let formData = new FormData();
        formData.append("name",this.username);
        formData.append("pass",this.password);
        let _this=this;
        login(formData).then(function(response) {
          return response.json();
        }).then(function(json) {
          _this.isLoading=false;
          if(json.code===0){
            // json.token;
            _this.$store.state.token=json.data.token;
            _this.$store.state.userInfo=json.data.data;
            _this.$router.push('/mine');
            WebSocketAPI.connect(json.data.token);
          }else
          {
            alert("登录失败，账户或者密码错误！")
          }
        });
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../assets/css/login_register.styl";
</style>
