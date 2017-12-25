<template>
  <div class="actmsg">
      <active-explain></active-explain>
      <apply-process></apply-process>
  </div>
</template>
<script>
import ActiveExplain from './Active_explain/Active_explain.vue'
import ApplyProcess from './Process/ApplyProcess.vue'
export default {
    components: {
        ActiveExplain,
        ApplyProcess
    }
}
</script>
<style scoped>
.actmsg {
    width: 100%;
    height: auto;
}
</style>


