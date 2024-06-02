<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <title>Document</title>
    <!-- <link rel="stylesheet" href="text.css" /> -->



    <div class="all">
        <div class="reg">
            <div class="reg_1">
                <h2>已有账号？</h2>
                <p>请使用你的账号进行登录！</p>
                <router-link to="/">
                    <button type="button" class="sig">登录</button>
                </router-link>
            </div>
        </div>
        <div class="log">
            <div>
                <div class="register" id="tiao">
                    <form>
                        <div class="register-top-grid">
                            <h3>注册新用户</h3>
                            <div class="input">
                                <input class="ll" type="text" placeholder="请输入用户名" v-model="name" />
                            </div>
                            <div class="input">
                                <input class="ll" type="password" placeholder="请输入密码" v-model="password" />
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="text-center">
                            <input type="submit" value="注册" class="zhuce" @click="zhuce" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return { name: '', password: '' }
    },
    methods: {
        zhuce() {
 
            if (this.password.length < 6 || this.password.length >12) {
                alert("输入的密码不合法，密码长度保持在6-12")
            }
        
            if (this.name.length<=0){
                alert("长度必须大于0")
            }
            if (this.name.length>0&&this.password.length >= 6 && this.password.length <= 12)
            {
                this.$router.push('/');
            }

        }
    }
}
</script>
<style scoped>
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
    background-color: #20b2aa;
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
    background-color: #20b2aa;
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

span {
    color: #999;
    font-size: 0.85em;
    padding-bottom: 0.2em;
    display: block;
    text-transform: uppercase;
    margin-bottom: 4px;
}

.ll {
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
    /* text-align: center; */
    font-family: "Marvel-Regular";
    margin: 10px 0;
}

.text-center {
    text-align: center;
}

.zhuce {
    border: none;
    font-size: 10px;
    color: rgb(255, 253, 253);
    width: 80px;
    height: 35px;
    background-color: rgb(241, 52, 10);
}</style>