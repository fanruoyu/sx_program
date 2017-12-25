<template>
    <div class="apply">
        <h1>报名名单 <span>短信通知</span></h1>
        <el-table
            ref="multipleTable"
            :data="multipleSelection"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="居民姓名"
                width="120">
                <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
                prop="tel"
                label="联系电话"
                width="120">
            </el-table-column>
            <el-table-column
                prop="msg"
                label="短信通知"
                show-overflow-tooltip>
            </el-table-column>
        </el-table>
       <div class="block">
            <el-pagination
                background
                @current-change='handleCurrentChange'
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
          pageSize: 0,
          count: 10,
        multipleSelection: []
      }
    },
    methods: {
        handleCurrentChange(val) {
            this.$http.post('/list', {
              pageSize: val,
              count: this.count
          })
          .then((res) => {
              this.multipleSelection = res.data.list;
          })
      }
    },
   created () {
       this.$http.post('/list', {
              pageSize: this.pageSize,
              count: this.count
          })
          .then((res) => {
             this.multipleSelection = res.data.list
          })
   }
  }
</script>
<style scoped>
.apply{
    width: 100%;
    height: 586px;
}
.apply> h1{
    line-height: 40px;
    font-size: 20px;
    font-weight: normal;
}
.apply >h1 span{
    font-size: 16px;
    color:#409EFF;
    margin-left:10px;
}
.block{
    width: 100%;
    text-align: right;
    margin-top:15px;
}
</style>

