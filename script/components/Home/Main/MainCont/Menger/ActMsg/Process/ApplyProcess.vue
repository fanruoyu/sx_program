<template>
  <div class="process">
        <h1>居民报名</h1>
        <el-row :gutter="20" class="myrow">
            <el-col :span='12'>
                <p>姓名*</p>
                <input type="text" style="width:100%" v-model.trim="myName" @focus="clearName" placeholder="文本框内容">
            </el-col>
            <el-col :span='12'>
                <p>联系电话*</p>
                <input type="text" style="width:100%"  v-model.trim="myTelephone"  @focus="clearTel" placeholder="文本框内容">
            </el-col>
        </el-row>
        <el-row style="margin-top:10px;">
            <el-col :span='24'>
                <p>备注信息</p>
                <input type="text" style="width:100%"  v-model.trim="myInformation"  @focus="clearInfor" placeholder="文本框内容">
            </el-col>
        </el-row>
        <el-row style="text-align:center">
            <el-button type="primary" style="width:120px;" @click="applyMsg">报名</el-button>
        </el-row>
        
        </el-form>
    
  </div>
</template>
<script>
import { getDateStr } from '../../../../../../../utiles/utiles'
    export default {
        data() {
            return {
                labelPosition: 'right',
                myName: '',
                myInformation: '',
                myTelephone: '',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                }
            };
        },
        methods: {
            applyMsg () {
                let errors = '';
                let regTel = /1[3589][0-9]{9}/
                if (!this.myName) {
                    errors = '请输入您的姓名'
                } else if (!this.myTelephone) {
                    errors = '请输入您的联系电话'
                } else if (!regTel.test(this.myTelephone)) {
                    errors = '联系方式格式有误'
                }
                if (errors) {
                    this.$alert(errors, '提示', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.myTelephone = '';
                            this.myName = '';
                            this.myInformation = '';
                        }
                    });
                } else {
                    this.$http.post('/admin/add_apply', {
                        time: getDateStr(new Date()),
                        name: this.myName,
                        msg: this.myInformation,
                        tel: this.myTelephone
                    })
                    .then((res) => {
                        if (res.data.code === 0) {
                            this.$alert('该人员已在名单中', '提示', {
                                confirmButtonText: '知道了'
                            });
                        }
                        if (res.data.msg === 'Success') {
                            this.$alert('报名成功', '提示', {
                                confirmButtonText: '知道了',
                                callback: () => {
                                    this.myName = '';
                                    this.myInformation = '';
                                    this.myTelephone = '';
                                    this.$message({
                                        type: 'success',
                                        message: 'Success!'
                                    });
                                }
                            });
                        }
                    })
                }
                
               
            },
            clearName () {
                this.myName = '';
            },
            clearTel () {
                this.myTelephone = '';
            },
            clearInfor () {
                this.myInformation = '';
            }
        }
    }
</script>
<style scoped>
.process {
    background:#ffffff;
    width:100%;
    height:auto;
    padding:20px;
}
.process h1{
    font-family:MicrosoftYaHei;
    font-size:18px;
    color:#212121;
    padding-bottom: 24px;
}
.el-button{
    margin: 20px auto;
}
.process p {
    font-size: 16px;
    color:#999;
    padding: 5px;
}
.process input{
    padding:10px;
    border:1px solid #ccc;
    font-size: 18px;
    border-radius: 10px;
}
</style>

