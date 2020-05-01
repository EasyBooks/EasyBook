<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading"/>
    </transition>
    <Tips :show="dielog" :msg="msg"/>
    <div class="register-page">
      <header class="header">
        <router-link to="/mine" class="close-btn">
          <img src="../assets/image/batch_download_close.png">
        </router-link>
        <router-link to="/login" class="register-btn">登录</router-link>
      </header>
      <main class="main">
        <h2>注册</h2>
        <div class="form">
          <div class="input-box">
            <input type="text" placeholder="请输入昵称" v-model.trim="nickname">
          </div>
          <div class="input-box">
            <input type="text" placeholder="请输入账号" v-model.trim="username">
          </div>
          <div class="input-box">
            <input type="password" placeholder="请输入密码" v-model.trim="password">
            <button class="code" :disabled="codeBtn" @click="countdown">{{codeValue}}</button>
          </div>
        </div>
        <p class="tips">
          {{tips}}
        </p>
        <div class="btn-box">
          <button :disabled="registerBtn" @click="register">立即注册</button>
          <small>问题帮助</small>
        </div>
      </main>
      <footer class="footer" @click="dielog = !dielog">
        注册表示同意xxxx协议
      </footer>
    </div>
  </div>
</template>
<script>
  import {register} from '@/api'

  export default {
    name: 'register',
    computed: {
      registerBtn() {
        if(this.nickname.length<5||this.nickname.length<3||this.password.length<5){
            return true;
        }
        return false;
      }
    },
    data() {
      return {
        nickname:"",
        username: '',
        password: '',
        tips: '',
        isLoading: false,
        dielog: false,
        msg: '无提示',
        codeBtn: false,
        codeValue: '获取验证码'
      }
    },
    methods: {
      register(){
        let data={"username":this.username,"password":this.password,"nickname":this.nickname};
        register(data).then(function(response) {
                            return response.json();
                          }).then(function(json) {
                            alert(json.info);
                            this.isLoading=false;
                          });
      },
      countdown(){
        this.codeValue = '30s';
        this.codeBtn = true;
        this.timer = setInterval(() => {
          if(this.codeValue === '0s'){
            clearInterval(this.timer)
            this.codeValue = '获取验证码';
            return this.codeBtn = false;
          }
          this.codeValue = parseInt(this.codeValue) - 1 + 's'
        },1000);
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../assets/css/login_register.styl";
</style>
