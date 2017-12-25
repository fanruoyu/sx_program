<template>
    <div class="activelist">
        <h1>基本信息</h1>
        <sec-menu></sec-menu>
        <menu-list
        v-for="(item, index) in arr"
        :key="index"
        :ind='index'
        :isdel='item.isDel'
        @adddoms='getDom'
        @remdoms='remArr'></menu-list>
        <save-send></save-send>
    </div>
</template>
<script>
import SecMenu from './PersonMsg/PersonMsg.vue'
import MenuList from './MenuList/MenuList.vue'
import SaveSend from './MainBtn/SaveSend.vue'
export default {
    data () {
        return {
            arr: [{isDel: false}]
        }
    },
    components: {
        SecMenu,
        MenuList,
        SaveSend
    },
    methods: {
        getDom (res) {
            this.arr.push(res);
        },
        remArr (i) {
            this.arr.splice(i, 1)
        }
    }
}
</script>
<style scoped>
.activelist{
    width: 100%;
    height: auto;
    background: #fff;
    padding: 30px 20px;
}
.activelist h1{
    font-family:MicrosoftYaHei;
    font-size:18px;
    color:#212121;
    padding-bottom: 14px;
}
</style>