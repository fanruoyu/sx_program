<template>
  <div>
       <el-select v-model="province"  placeholder="请选择省" style="width:131px" @change="changePro">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :value="item.name">
                  </el-option>
              </el-select>
             <el-select v-model="city"  style="margin-top: 5px;width:131px"  placeholder="请选择市" @change="changeCity">
                  <el-option
                      v-for="item in cityList"
                      :key="item.value"
                      :value="item.name">
                  </el-option>
              </el-select>
              <el-select v-model="area"   style="margin-top: 5px;width:151px"  placeholder="请选择区" @change="changeArea">
                  <el-option
                      v-for="item in areaList"
                      :key="item.value"
                      :value="item">
                  </el-option>
              </el-select>
              <!-- <el-select v-model="door"  style="margin-top: 5px;width:111px"  placeholder="请选择楼">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :value="item.value">
                  </el-option>
              </el-select> -->
  </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Array
        }
    },
  data () {
      return {
        province: '',
        city: '',
        cityList: [],
        area: '',
        areaList: [],
        door: ''
      }
  },
  methods: {
      changePro (val) {
        this.city = ''
        this.area = ''
        this.options.forEach((item,index) => {
            if (val === item.name) {
                this.cityList = item.city
            }
        })
      },
      changeCity (val) {
          this.area = ''
          this.cityList.forEach((item, indx) => {
              if (val === item.name) {
                  this.areaList = item.area
              }
          })
      },
      changeArea (val) {
          this.$emit('send-location', {
              province: this.province,
              city: this.city,
              area: this.area
          })
      }
  }
}
</script>

