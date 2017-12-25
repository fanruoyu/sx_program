<template>
    <div class="activelist">
        <el-tabs type="border-card">
            <el-tab-pane label="活动介绍"><introduces></introduces></el-tab-pane>
            <el-tab-pane label="邀请居民"><invitations></invitations></el-tab-pane>
            <el-tab-pane label="居民报名"><applys></applys></el-tab-pane>
            <el-tab-pane label="活动总结"><summarys></summarys></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Summarys from './Tabs/Summary/Summary.vue'
import Applys from './Tabs/Apply/Apply.vue'
import Invitations from './Tabs/Invitation/Invitation.vue'
import Introduces from './Tabs/Introduce/Introduce.vue'
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    components: {
        Summarys,
        Applys,
        Invitations,
        Introduces
    }
  };
</script>
<style scoped>
.activelist{
    width: 100%;
    height: auto;
    background: #eee;
    padding: 30px 20px;
}
.activelist h1{
    font-family:MicrosoftYaHei;
    font-size:18px;
    color:#212121;
    padding-bottom: 14px;
}
</style>
