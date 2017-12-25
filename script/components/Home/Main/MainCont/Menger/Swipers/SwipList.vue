<template>
    <div class="swiper">
        <h1>活动列表</h1>
        <el-carousel :interval="4000" type="card" height="200px" trigger="click" :autoplay='false'>
            <el-carousel-item v-for="item in 6" :key="item">
                <section>
                    <p class="first">"寿星齐相聚，温暖夕阳红"</p>
                    <p>社区第四期生日派对</p>
                    <p class="last">活动时间：2017-04-02</p>
                </section>
                
            </el-carousel-item>
        </el-carousel>
        <!-- <el-carousel trigger="click" height="231px" :autoplay='true'>
            <el-carousel-item v-for="item in 4" :key="item">
                <div v-for='val in 3' :key="val" class='page' :class="{active: val === 1}">
                    <section>
                    <p>"寿星齐相聚，温暖夕阳红"</p>
                    <p>社区第四期生日派对</p>
                </section>
                </div>
            </el-carousel-item>
        </el-carousel> -->
    </div>
</template>
<style>

.swiper{
    width: 100%;
    height:auto;
    background: #fff;
    overflow: hidden;
    padding:0 50px;
}
.swiper h1{
    font-family:MicrosoftYaHei;
    font-size:18px;
    color:#212121;
    padding-left:20px;
    padding-top:30px;
    padding-bottom: 14px;
}
.swiper section {
    width: 100%;
    height: 100%;
    text-align: center;
}
.swiper section p{
    font-size: 18px;
    line-height: 20px;
    font-family:MicrosoftYaHei;
    color:#212121;
}
p.first {
    margin-top: 30px;
}
p.last {
    margin-top:25px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    
}
.el-carousel__item:nth-child(2n+1) p {
    color:#000
}


/* .swiper .active{
    background:#01b0b9;
    
}
.swiper .active p {
    color:#fff;
}
.page{
    width:33%;
    height: 140px;
    float: left;
    text-align: center;
    margin-top:30px;
    border:1px solid #ccc;
    margin-left:1px;
}
.active p{
    color: #fff;
}
.swiper .el-carousel> .el-carousel__container {
    height: 200px!important;
    overflow: hidden;
}
.swiper .el-carousel__item{
    height: auto;
   
} */  

</style>

