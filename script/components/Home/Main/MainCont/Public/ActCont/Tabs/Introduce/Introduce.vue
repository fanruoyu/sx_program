<template>
  <div class="introduce">
        <h1>基本信息</h1>
      <div class="intro_top">  
        <el-row>
          <el-col :span='10' class="onePag">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:8888/user/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <p>
                  图片格式:<span>jpg/png</span>
                  图片大小:<span>小于200k</span>
                  建议尺寸:<span>宽度大于800px</span>
              </p>
          </el-col>
          <el-col :span='13' class="twoPag">
              <!-- 活动名称 -->
              <p>活动名称</p>
              <label>
                <input type="text" v-model="activeName">
              </label>
              <!-- 活动时间 -->
              <p>活动时间</p>
              <div class="block">
                  <el-date-picker
                    v-model="start"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                  <el-date-picker
                    v-model="end"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
              </div>
              <!-- 活动地址 联动 -->
              <p>请选择地址</p>
              <selects :options='options' @send-location= 'getLocation'></selects>
          </el-col>
        </el-row>
      </div>
      <menu-list
        v-for="(item, index) in arr"
        :key="index"
        :ind='index'
        :isdel='item.isDel'
        @adddoms='getDom'
        @remdoms='remArr'></menu-list>
      <div class="save">
        <el-button type="primary" @click="saveDate">保存并发布</el-button>
      </div>
  </div>
</template>
<script>
import MenuList from '../../../MsgCont/MenuList/MenuList.vue'
import Selects from './Selection/Selects.vue'
export default {
    data() {
        return {
            arr: [{isDel: false}],
            imageUrl: '',
            activeName: '春暖花开4月生日会',
            start: new Date(),
            end: new Date(),
            options: [],
            locationName: null,
            id: 0
        }
    },
    components: {
        MenuList,
        Selects
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片格式有误!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        saveDate () {
            if (!this.imageUrl) {
                this.$message('至少上传一张图片');
                return;
            }
            if (!this.activeName) {
                this.$message('请填写入的名称');
                return;
            }
            if (!this.start) {
                this.$message('请填写活动起始时间');
                return;
            }
            if (!this.end) {
                this.$message('请填写活动终止时间');
                return;
            }
            if (!this.locationName) {
                this.$message('请选择地址');
                return;
            }
            this.id ++;
            console.log(this.id)
            this.$http.post('/admin/activity/add', {
              'name': this.activeName,
              'imageUrl': this.imageUrl,
              'imagePath': this.$store.state.imageUrl,
              'startDate': this.start,
              'endDate': this.end,
              'locationName': this.locationName
            })
            .then(res => {
                if (res.data === 'success') {
                    this.$message({
                        message: res.data,
                        onClose: () => {
                            this.activeName = '';
                            this.imageUrl = '';
                            this.start = '';
                            this.start = new Date();
                            this.end = new Date()
                        }
                    });
                }
            })
        },
        Clased () {

        },
        getDom (res) {
            this.arr.push(res);
        },
        remArr (i) {
            this.arr.splice(i, 1)
        },
        getLocation (val) {
            this.locationName = val;
        }
    },
   created () {
       this.$http.get('/admin/community/location/root')
            .then((res) => {
                this.options = res.data;
            })
   }
}
</script>
<style scoped>
.introduce{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.introduce>h1 {
  line-height: 60px;
  font-size: 18px;
}
.onePag p{
    padding:6px 0;
    color:#ccc;
    font-size: 14px;
    line-height:30px;
}
.onePag p span{
    margin-right: 10px;
}
.avatar-uploader{
    width: 100%;
    height:180px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 278px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar{
      width: 100%;
      height: 178px;
  }
  .twoPag{
    margin-left:15px;
  }
.twoPag p {
  width: 100%;
  color:#999;
  font-size: 16px;
  line-height: 28px;
}

label{
  width: 100%;
}
label input{
  width: 100%;
  border-radius: 8px;
  border:1px solid #ccc;
  padding:10px;
}
.save{
    margin:30px 0;
    text-align: center;
}
.el-button{
    width: 140px;
    height:44px;
}
</style>


