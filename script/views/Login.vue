<template>
  <div class="login" v-loading='$store.state.loading'>
     <ul>
        <li><label for=""> <span>账户名：</span>  <input type="text" v-model.trim="userName"></label></li>
        <li><label for=""> <span>密 码：</span>  <input type="password" v-model.trim="userPwd"></label></li>
        <li>
            <button @click="login" class="loginBtn">登录</button>
            <button @click="regist" class="registBtn">注册</button>
        </li>
     </ul>
  </div>
</template>
<script>
import { setCookie } from '../utiles/utiles.js'
export default {
    data () {
        return {
            userName: '',
            userPwd: '',
            loading: false
        }
    },
    methods: {
        login () {
            this.$store.commit('updata_loading', true)
            // console.log(this.$route.params.from)
            let routerPath = this.$route.params.from || '/home'
            this.$http.post('/admin/loginUser', {'userName': this.userName, 'userPwd': this.userPwd})
                .then((res) => {
                    console.log(res.data.author)
                    if (res.data.code === 0) {
                       setTimeout(() => {
                           setCookie('token', res.data.token)
                           this.$store.commit('updataUserMsg', this.userName)
                           this.$router.push({path: routerPath});
                           // console.log(res.data.author)
                           this.$store.commit('setAuthorzation', res.data.author);
                           this.$store.commit('updata_loading', false)
                       }, 1000)
                    } else {
                        this.$store.commit('updata_loading', false)
                        window.confirm('账号或密码输入错误，请重新输入');
                    }
            })
        },
        regist () {
            this.$http.post('/admin/regist', {'userName': this.userName, 'userPwd': this.userPwd})
                .then((res) => {
                    if (res.data.code === 0) {
                        window.confirm('注册成功！');
                        location.reload()
                    } else {
                        window.confirm('用户存在，请重新注册')
                        this.$store.commit('updata_loading', false)
                        this.userName = ''
                        this.userPwd = ''
                    }
            })
        }
    }
}
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
    background-image: url(../stantic/img/2.jpg);
}
.login ul {
    width: 50%;
    height:auto;
    background: #fff;
    border:1px solid #ccc;
    position: absolute;
    top:30%;
    left:50%;
    margin-left:-20%;
}
ul li {
    line-height: 100px;
    text-align: center;
}
ul li span{

    font-size: 16px;
    display: inline-block;
    width: 70px;
}
ul li input{
    width: 50%;
    height: 30px;;
    padding-left: 10px;
}
ul li button {
    border:none;
    width: 150px;
    height: 40px;;
    margin:0 50px;
    font-size: 18px;
    color:#fff;
}
.loginBtn{
    background: lightseagreen;
}
.registBtn {
    background: lightcoral;
}
</style>


