<template>
    <section class="active_head">
        <p>
            <el-row>
                <el-col :span='12'>
                    <span class="tit">责任人</span>
                    <el-dropdown class="flotR" trigger='click'>
                        <span class="el-dropdown-link">
                            选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <p class="item_search"><input type="text" placeholder="输入关键词搜索"><i class="icon iconfont icon-fangdajing"></i></p>
                            <el-dropdown-item>张鑫，13293483843  街道办事处</el-dropdown-item>
                            <el-dropdown-item>王亮，12313483843  居委会</el-dropdown-item>
                            <el-dropdown-item>李明，123439438577  居委会</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span='12'>
                    <span class="tit">责任人单位</span>
                    <el-dropdown class="flotR" trigger='click'>
                        <span class="el-dropdown-link">
                            选择责任单位<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>街道办事处</el-dropdown-item>
                            <el-dropdown-item>居委会</el-dropdown-item>
                            <el-dropdown-item>社区主任</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </p>
        <input cols="30" rows="10" value="张鑫，185020192181" readonly></input>
        <p><span class="tit">温馨提示</span></p>
        <textarea cols="30" rows="10">文本框内容</textarea>
    </section>
</template>
<style scoped>
.active_head{
    width: 100%;
    height: auto;
}
.active_head p {
    padding-bottom: 10px;
}
.active_head p .tit{
    color:#999;
    margin-left: 5px;
}
.active_head textarea, input{
    width: 100%;
    height:40px;
    line-height: 40px;
    padding:0 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow-y: hidden;
    margin-bottom: 10px;
}
.flotR{
    float: right;
}
.item_search{ 
    position: relative;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #5a5e66;
    cursor: pointer;
    outline: 0;
}
.item_search  i{
    position: absolute;
   right:10%;
   top:5px;
   font-size: 30px;
}
.item_search input{
    width: 100%;
    padding:7px
}
</style>

