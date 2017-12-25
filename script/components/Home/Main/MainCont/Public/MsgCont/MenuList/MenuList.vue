<template>
    <dl>
        <dd>
            <b>请输入栏目名称</b>
            <span>编辑</span>
            <span @click="addDom">添加栏目</span>
            <small @click="preView">预览</small>
            <a href="#" v-if="isdel" @click="remDom(ind)">删除</a>
        </dd>
        <dt>
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
        </dt>
    </dl>
</template>
<script>
export default {
    props: {
        isdel: {
            type: Boolean
        },
        ind: {
            type: Number
        }
    },
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$store.commit('updata_image', this.imageUrl);
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
        addDom () {
            this.$emit('adddoms', {isDel: true})
        },
        remDom (index) {
            this.$emit('remdoms', index)
        },
        preView () {
            this.$alert(`<img src='${this.imageUrl}' style='width: 50%'/>`, '图片预览', {
                dangerouslyUseHTMLString: true
            });
        }
    }
}
</script>

<style scoped>

dl{
    width: 100%;
    height: auto;
    margin-top:30px;
}
dl dd{
    line-height: 40px;
}
dl dd b{
    font-size: 16px;
    margin-right: 5px;
}
dl dd span{
    margin:0 5px;
    color:lightskyblue
}
dl dd span:hover, dl dd small:hover {
    cursor: pointer;
}
dl dd small{
    margin:0 5px;
    color:lightskyblue;
}
dl dd a{
    color:lightcoral;
    text-decoration: none;
}
dl dt{
    width:100%;
    overflow: hidden;
}
dl dt p{
    padding:6px 0;
    color:#ccc;
    font-size: 14px;
}
dl dt p span{
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
    width: 620px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar{
      width: 100%;
      height: 178px;
  }
</style>

