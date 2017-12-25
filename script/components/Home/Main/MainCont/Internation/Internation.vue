<template>
    <div class='internation'>
        网络化管理平台页面内容
    </div>
</template>
<script>
export default {
  created () {
        this.$http.get('/admin/menu/grid')
            .then(res => {
                this.$store.commit('updata_list', res.data.data)
        })
    }
}
</script>

<style scoped>
.internation{
    width:100%;
    height:100%;
}
</style>