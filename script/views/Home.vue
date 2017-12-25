<template>
  <div class="home">
      <el-container>
          <asides></asides>
          <mainner></mainner>
      </el-container>
  </div>
</template>
<script>
import Asides from '../components/Home/Asides/AsideList/Aside.vue'
import Mainner from '../components/Home/Main/Main.vue'
export default {
    components: {
        Asides,
        Mainner
    }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.el-container{
    height: 100%;
}
</style>

