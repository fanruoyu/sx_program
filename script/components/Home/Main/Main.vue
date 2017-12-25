<template>
  <div class="main_contains">
       <el-main class="mainconta">
            <headers></headers>
            <middlecont></middlecont>
       </el-main>
  </div>
</template>
<script>
import Middlecont from './MainCont/MiddleCont/MiddleCont.vue'
import Headers from './MainCont/Headers/Headers.vue'
export default {
    components: {
        Middlecont,
        Headers
    }
}
</script>

<style scoped>
.main_contains{
    width: 100%;
    background: #eee;
    
}
.mainconta{
    width:100%;
    height: 100%;
}
.el-main{
    padding:0;
}
</style>

