<template>
    <el-row class="tit_tab">
        <el-menu class="el-menu-demo" mode="horizontal">
            <router-link :to="{name: 'Menger'}"><el-menu-item index="1" to="{name: 'page'}">一口式受理平台</el-menu-item></router-link>
            <router-link :to="{name: 'Internation'}"><el-menu-item index="2">网络化管理平台</el-menu-item></router-link>
            <router-link :to="{name: 'Plublic'}"><el-menu-item index="3">公共管理平台</el-menu-item></router-link>
        </el-menu>
        <div class="two">
            <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><i class="icon iconfont icon-lingsheng"></i></el-menu-item>
            <el-menu-item index="2"><i class="icon iconfont icon-youxiang1"></i></el-menu-item>
            <el-menu-item index="2"><img src="../../../../../stantic/img/1.jpg" alt=""></el-menu-item>
            <el-submenu index="2" class="aside_last">
                <template slot="title">管理员 <span>{{$store.state.userName}}</span></template>
                <el-menu-item index="2-1">欢迎<small>{{$store.state.userName}}</small>登录</el-menu-item>
                <el-menu-item index="2-2" @click="loginout">登录</el-menu-item>
                <el-menu-item index="2-3" @click="loginout">退出</el-menu-item>
            </el-submenu>
            </el-menu>
        </div>
    </el-row>
</template>
<script>
import { delCookie } from '../../../../../utiles/utiles'
export default {
    methods: {
        loginout () {
            delCookie ('token')
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style scoped>
.tit_tab{
    width: 100%;
    background: #fff;
    border-bottom:solid 1px #e6e6e6;
}
.tit_tab .el-menu{
    float: left;
}
.two .el-submenu span{
    font-size: 16px;
    vertical-align: middle;
    display: inline-block;
    margin-top: -5px;
}
.tit_tab .el-menu-item{
    font-size:20px;
}
.tit_tab .el-menu--horizontal {
    border:0;
}
.tit_tab .el-menu--horizontal>.el-menu-item.is-active { 
   border:none;
}
.tit_tab .active li{
    background: #01b0b9;
    color:#fff;
}
.two{
    float: right;
}
.two > ul >.el-menu-item{
   padding: 0 5px;
}

.two > ul >.el-menu-item>i{
    font-size: 24px;
}
.two > ul >.el-menu-item>img{
    width: 27px;
    height:27px;
    border-radius: 50%;
    border:1px solid #ccc;
}
.mainconta{
    height: 100%;
    width: 100%;
}
.el-menu-item small{
    color: limegreen;
    margin-top:-5px;
    display: inline-block;
    margin-top:-5px;
}
</style>