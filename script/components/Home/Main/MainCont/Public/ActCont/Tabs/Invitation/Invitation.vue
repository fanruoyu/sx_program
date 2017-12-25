<template>
    <div class="invitation">
        <h1>邀请名单 <span @click="addMark">添加居民</span> <span>短信通知</span></h1>
        <el-table
            ref="multipleTable"
            :data="$store.state.resident"
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
                prop="sex"
                label="性别"
                width="120">
            </el-table-column>
            <el-table-column
                prop="age"
                label="年龄"
                width="120">
            </el-table-column>
            <el-table-column
                prop="msg"
                label="短信通知"
                width="120">
            </el-table-column>
            <el-table-column
                prop="ps"
                label="备注信息"
                width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handlePs(scope.$index, scope.row)">添加备注</el-button>
                     <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">查看详情</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                background
                @current-change='handleCurrentChange'
                layout="prev, pager, next"
                :total="$store.state.sumPages">
            </el-pagination>
        </div>
        <div class="mark" v-if="isShow">
            <section>
                <h2>添加居民 <span @click.stop="closed">X</span></h2>
                <div class="markCont">
                    <p>居民信息 <input type="text" placeholder="请输入用户姓名或手机号" v-model.trim="userMessage"> <button @click="searchMsg">查询</button></p>
                    <el-table
                        ref="multipleTable"
                        :data="searchList"
                        @selection-change="handleSelectionChange"
                        v-if="isShowA"
                        tooltip-effect="dark"
                        style="width: 100%">
                        <el-table-column
                            align='center'
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            align='center'
                            label="居民姓名"
                            width="120">
                            <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column
                            align='center'
                            prop="tel"
                            label="联系电话"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            align='center'
                            prop="sex"
                            label="性别">
                        </el-table-column>
                        <el-table-column
                            align='center'
                            prop="age"
                            label="年龄">
                        </el-table-column>
                    </el-table>
                    <el-button v-if="isShowA" style="margin-top:20px;" @click="applyResident">邀请居民</el-button>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { getCookie } from '../../../../../../../../utiles/utiles.js'
import { getDateStr } from '../../../../../../../../utiles/utiles'
export default {
    data () {
        return {
            isShow: false,
            isShowA:false,
            searchList: [],
            currentPage: 1,
            multipleSelection: [],
            count: 10,
            pageSize: 1,
            userMessage: '',
            Selected: []
        }
    },
    methods: {
        handleCurrentChange (val) {
            this.pageSize = val
            this.$store.dispatch('updata_resident_list', {
            pageSize: this.pageSize,
            count: this.count
        })
        },
        handleSelectionChange(val) {
            this.Selected = val;
        },
        addMark () {
          this.isShow = true
        },
        closed () {
            this.isShow = false;
            this.userMessage = '';
            this.searchList = [];
            this.Selected = [];

        },
        searchMsg () {
            let errors = '';
            let reg = /1[3,5,8,9][0-9]{9}/
            if (!this.userMessage) {
                errors = '请输入查询信息'
            }
            if (errors) {
                this.$alert(errors, '消息提示');
            } else {
                this.$http.post('/admin/search', {
                    msg: this.userMessage
                })
                .then(res => {
                    if (res.data.code === 0) {
                        this.$alert('未查到相关信息', '提示信息', {
                            callback: () => {
                               this.userMessage = ''
                            }
                        })
                    } else {
                        this.isShowA = true
                        this.searchList = res.data.list;
                        // console.log(res.data)
                    }
                })
            }
            
            
        },
        applyResident () {
            if (this.Selected.length != 0) {
                this.Selected.forEach((item, index) => {
                    item.date = getDateStr(new Date())
                })
                this.$http.post('/admin/applyResident', {
                    list: this.Selected
                })
                .then((res) => {
                    if (res.data.msg === 'Success') {
                        this.$message({
                            message: '邀请成功!',
                            type: 'success'
                        });
                        this.searchList = [];
                        this.isShowA = false;
                        this.userMessage = ''
                    }
                })
            } else {
                this.$alert('请选择邀请人员', '提示消息')
            }
        },
        handleEdit(row) {
            console.log(row.id);
        },
        handleDelete(row) {
            let that = this;
            this.$http.post('/admin/delete', {
                id: row.id,
                token: getCookie('token')
            })
            .then(res => {
                if (res.data.code === 1001) {
                    this.$msgbox({
                        title: '消息',
                        message: res.data.message,
                        showCancelButton: true,
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        beforeClose: (action, instance, done) => {
                            if (action == 'confirm') {
                                that.$router.push({
                                    name: 'Login',
                                    params: {
                                        from: this.$route.path
                                    }
                                })
                                done()
                            } else {
                                done()
                            }
                        }
                    })
                } else if(res.data.msg === 'Success' && this.$store.state.authorzation === 'admin') {
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                   this.$store.state.sumPages = res.data.len
                    this.$store.dispatch ('updata_resident_list', {
                        pageSize: this.pageSize,
                        count: this.count
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    }); 
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
                    
                } else if (this.$store.state.authorzation != 'admin') {
                    this.$alert('您不是管理员，没有删除权限！')
                }
            })
        },
        handlePs (index, row) {
           this.$prompt('请输入备注内容', '添加备注', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /\S+/,
                inputErrorMessage: '内容不能为空'
                }).then(({ value }) => {
                    
                    this.$http.post('/admin/replace', {
                        id: row.id,
                        newMsg: value
                    })
                    .then(res => {
                        this.$store.dispatch ('updata_resident_list', {
                            pageSize: this.pageSize,
                            count: this.count
                        })
                    })
                    this.$message({
                        type: 'success',
                        message: '已成功添加备注!'
                    });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '输入内容有误'
                });       
            });
        }
    },  
    created () {
        this.$store.dispatch('updata_resident_list', {
            pageSize: this.pageSize,
            count: this.count
        })
    }
}
</script>
<style scoped>
.invitation{
    width: 100%;
    height: auto;
}
.invitation> h1{
    line-height: 40px;
    font-size: 20px;
    font-weight: normal;
}
.invitation >h1 span{
    font-size: 16px;
    color:#409EFF;
    margin-left:10px;
}
.block{
    width: 100%;
    text-align: right;
    margin-top:15px;
}
.mark, .addps_mark{
  z-index: 999;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0,.5)
}
.mark section{
    background: #fff;
    width: 50%;
    height:auto; 
    margin:10% auto;
}
section h2{
    font-size: 18px;
    line-height: 50px;
    background: lightseagreen;
    color:#fff;
    padding-left:20px;
    position: relative;
}
h2 span{
    position: absolute;
    right: 20px;
    background: rgba(0,0,0,.5);
    width: 25px;
    height:25px;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    font-weight: normal;
    font-size: 14px;
    top:13px;
}
h2 span:hover, .markCont button:hover, .invitation >h1 span:hover{
    cursor: pointer;
}
.markCont{
    padding:20px;
    width: 100%;
    height: auto;
    text-align: center;
}
.markCont p {
    font-size: 18px;
}
.markCont input{
    padding: 10px;
    width:50%;
    margin:0 10px;
}
.markCont button{
    border:none;
    padding: 8px 30px;
    background: lightseagreen;
    color:#fff;
    font-size: 18px;
    vertical-align: middle;
}
.markCont ul {
    width: 100%;
}
.markCont ul li {
    line-height: 40px;
}

</style>

