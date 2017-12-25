<template>
    <div class="middle_content">
        <el-row class="date">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>....</el-breadcrumb-item>
                <el-breadcrumb-item>{{$store.state.active_name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <router-view></router-view>
    </div>
</template> 
<style scoped>
.middle_content{
    width: 100%;
    height: 100%;
    padding:0 10px;
}
.date{
    height: 50px;
    padding-top:14px;
    padding-bottom: 30px;
}
</style>

