<template>
    <div class="list">
        <el-table
            :data="$store.state.apply_list"
            style="width: 100%;">
            <el-table-column
                align='center'
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                align='center'
                prop="tel"
                label="联系电话"
                width="140">
            </el-table-column>
            <el-table-column
                align='center'
                prop="msg"
                label="备注信息"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                align='center'
                prop="date"
                label="报名时间">
            </el-table-column>
            <el-table-column
                align='center'
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    @click.native.prevent="deleteRow(scope.row)"
                    type="text"
                    size="small">
                    移除
                    </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            deleteRow(row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('/admin/delete_apply', {
                        id: row.id
                    })
                    .then((res) => {
                        if (res.data.msg === 'success') {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.$store.dispatch('updata_apply_list')
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            }
        },
        created () {
            this.$store.dispatch('updata_apply_list')
        }
    }
</script>
<style>
.list{
    width: 100%;
    height: auto;
}
</style>

