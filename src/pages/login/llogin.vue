<template>
    <div class="denglu">
      <h2>登录</h2>
      <input type="text" v-model="account" placeholder="账号">
      <input type="password" v-model="password" placeholder="密码">
      <button @click="login">登录</button>
  
      <div v-if="isLoggedIn">
        隐藏部分
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        account: '',
        password: '',
        isLoggedIn: false
      }
    },
  
    methods: {
      login() {
        // 在此处实现登录逻辑，例如发送请求验证账号密码
  
        if (登录成功) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式 */
  .denglu{
    padding-top:400px ;
  }
  </style>