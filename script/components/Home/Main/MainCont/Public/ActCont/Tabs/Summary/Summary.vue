<template>
  <div class="summary">
      <menu-list
        v-for="(item, index) in arr"
        :key="index"
        :ind='index'
        :isdel='item.isDel'
        @adddoms='getDom'
        @remdoms='remArr'>
      </menu-list>
     <div class="save">
        <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>
<script>
import MenuList from '../../../MsgCont/MenuList/MenuList.vue'
export default {
     data () {
        return {
            arr: [{isDel: false}]
        }
    },
    components: {
        MenuList
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
.summary{
    width: 100%;
    height: auto;
}
.summary h1{
    line-height: 40px;
    font-weight: normal;
    font-size: 16px;
}
.summary h1 a{
    color:#01b0b9;;
    text-decoration: none;
    margin:0 10px;
}
.summary h1 span{
    color:#ccc;
}
section{
    width: 100%;
    border:1px solid #ccc;
    height: 100px;
    position: relative;
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
.summary > p{
    padding:10px 0;
    color:#ccc;
    font-size: 14px;
}
.summary > p span{
    margin-right: 10px;
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

