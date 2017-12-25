<template>
  <div class="headers">
      <h1>三鑫智慧社区</h1>
      <p>一口式受理平台</p>
      <img src="../../../../stantic/img/1.jpg" alt="">
      <span>管理员 {{$store.state.userName}}</span>
  </div>
</template>
<style scoped>
.headers{
    width: 100%;
    text-align: center;
    color:#fff;
}
.headers h1{
    font-size: 24px;
    margin:32px 0;
    font-weight: normal;
}
.headers p{
   margin-bottom: 32px;
}
.headers img{
    width: 81px;
    height: 81px;
    border-radius: 50%;
    border:3px solid #fff;
}
.headers span{
    display: block;
    margin-top:19px;
    font-size: 16px;
    margin-bottom: 20px;
}
</style>

