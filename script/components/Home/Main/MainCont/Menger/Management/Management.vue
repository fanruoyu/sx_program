<template>
  <div class="manegerment">
      <h1>报名名单</h1>
      <tab-list></tab-list>
  </div>
</template>
<script>
import TabList from './TabList/TabList'
export default {
  components: {
    TabList
  }
}
</script>

<style scoped>
.manegerment {
  background:#fff;
  padding-bottom: 30px;
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
.manegerment h1{
    padding: 20px;
    font-family:MicrosoftYaHei;
    font-size:18px;
    color:#212121;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
</style>

