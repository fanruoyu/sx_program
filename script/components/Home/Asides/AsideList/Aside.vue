<template>
<div class="aside">
    <el-aside>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#29282e"
            text-color="#fff"
            active-text-color="#ffd04b">
                <!-- 头部内容区域 -->
                <headers></headers>
                <!-- 导航侧边栏 -->

                <!-- 不含二级 -->
                <el-menu-item
                    v-if='!item.submenus'
                    :index="index.toString()"
                    v-for="(item, index) in $store.state.list"
                    :key="index"
                    @click='change_router(item.type, item.id, item.name)'>
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>{{item.name}}</span>
                    </template>
                </el-menu-item>

                <!-- 含有二级-->
                <el-submenu v-if='item.submenus'
                    :index="index.toString()"
                    v-for="(item, index) in $store.state.list"
                    :key="index">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>{{item.name}}</span>
                    </template>

                    <!-- 含有三级submenus -->
                    <el-submenu v-if='val.submenus'
                        :index="index.toString() + '-' + ind.toString()"
                        v-for='(val, ind) in item.submenus'
                        :key="ind">
                        <template slot="title">{{val.name}}</template>
                        <el-menu-item
                        :index="index.toString() + '-' + ind.toString() + '-' + i"
                        v-for="(v, i) in val.submenus"
                        :key="i"
                        @click='change_router(v.type, v.id, v.name)'>
                            {{v.name}}
                        </el-menu-item>
                    </el-submenu>

                    <!-- 不含三级的submenus -->
                    <el-menu-item
                       :index="index.toString() + '-' + ind.toString()"
                        v-for='(val, ind) in item.submenus'
                        :key="ind"
                        @click='change_router(val.type, val.id, val.name)'>
                            {{val.name}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</el-aside>
</div>
</template>
<script>
import Headers from '../Headers/Headers.vue'
export default {
    components: {
        Headers
    },
    methods: {
        change_router (type, id, name) {
            this.$store.commit('updata_active_name', name)
            this.$router.push({name: type, params: {id: id}})
        }
    }
}
</script>
<style scoped>
.aside{
    height: 100%;
}
.el-aside{
    overflow-y: scroll;
    width: 250px!important;
}
.el-aside, .el-row, .el-col, .el-col ul{
    height: 100%;
}
.el-menu el-menu-vertical-demo{
    background:#29282e;
}
</style>


