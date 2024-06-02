<template>
    <title>Document</title>
  
    <!-- <link rel="stylesheet" href="text.css" /> -->
    <div class="all">
      <div class="log">
        <div class="register">
          <form>
            <div class="register-top-grid">
              <h3>用户登录</h3>
              <div class="input">
                <span>用户名 <label style="color: red">*</label></span>
                <input type="text" v-model="name" placeholder="请输入用户名" class="input-text" />
              </div>
              <div class="input">
                <span>密码 <label style="color: red">*</label></span>
                <input type="password" v-model="password" placeholder="请输入密码" class="input-text" />
              </div>
            </div>
            <div class="text-center">
              <input type="submit" value="提交" class="tijiao" @click="denglu" />
            </div>
          </form>
        </div>
      </div>
      <div v-if="isLoggedIn" class="">
       tygiffftttttttttttttttttttttttttttttttttttttttttttttthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfffffffffffffffffffffffffffffffmg
      </div>
    </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        password: '',
        isLoggedIn: false
      }
    },
  
    methods: {
      denglu() {
        if (this.name === 'pzyllll' && this.password === '1111') {
          this.isLoggedIn = true;
          this.$router.push('/home');
        } else {
          alert('账号或密码错误');
        }
      }
    }
  }
  </script>
  
  <style scoped>

.yincang{
    padding-top: 590px;
}

  .all {
    width: 800px;
    box-shadow: -10px 10px 25px rgba(210, 210, 210, 0.9);
    margin: auto;
    margin-top: 5%;
    display: flex;
    border-radius: 35px;
    background-color: #ffffff;
    height: 550px;
  }
  
  .log {
    width: 50%;
    margin: auto;
  }
  
  .reg {
    width: 50%;
    height: 100%;
    margin: auto;
    background-color: #4d5ef6;
    border-radius: 35px;
    color: #ffffff;
  }
  
  .reg_1 {
    text-align: center;
    margin: auto;
    margin-top: 50%;
  }
  
  .reg_1 h2 {
    font-weight: 700;
  }
  
  .reg_1 p {
    margin: 15px 0px 25px 0px;
  }
  
  .sig {
    width: 70px;
    height: 30px;
    border-radius: 12px;
    background-color: #3e4ceb;
    border-color: #fff;
    color: #ffffff;
  }
  
  #tiao {
    padding: 0em 0;
  }
  
  .reg_1 a {
    color: #ffffff;
  }
  
  h3 {
    font-size: 3em;
    color: black;
    padding-bottom: 1em;
    margin: 0;
    text-align: center;
    font-family: "Marvel-Regular";
  }
  
  .input {
    margin: 10px 50px;
    width: 300px;
    height: 70px;
  }
  
  .span {
    color: #999;
    font-size: 0.85em;
    padding-bottom: 0.2em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  
  .input-text {
    border: 1px solid #555;
    outline-color: #fd9f3e;
    width: 90%;
    font-size: 1em;
    padding: 0.5em;
    line-height: inherit;
  }
  
  .register-top-grid {
    color: black;
    padding-bottom: 1em;
    margin: 0;
    font-family: "Marvel-Regular";
    margin: 10px 0;
  }
  
  .text-center {
    text-align: center;
  }
  
  .tijiao {
    color: rgb(255, 253, 253);
    width: 80px;
    height: 35px;
    background-color: rgb(241, 52, 10);
    border: none;
  }
  </style>