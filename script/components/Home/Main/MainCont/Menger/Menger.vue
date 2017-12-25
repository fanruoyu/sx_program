<template>
    <div class='menger'>
        <swiper-list></swiper-list>
        <div class="button">
            <button @click='changeAct' :class="{active: !bool}">活动信息与报名</button>
            <button @click='changeManage':class="{active: bool}">人员管理</button>
        </div>
        <div class="maincont">
            <components :is='page'></components>
        </div>
        
    </div>
</template>
<script>
import SwiperList from './Swipers/SwipList'
import ActMsg from './ActMsg/ActMsg'
import Management from './Management/Management'
export default {
    data () {
        return {
            page: 'Management',
            bool:true
        }
    },
    components: {
        SwiperList,
        ActMsg,
        Management
    },
     methods: {
        changeManage () {
            this.page = 'Management'
            this.bool= true;
        },
        changeAct () {
            this.page = 'ActMsg';
            this.bool= false;
        }
    },
    created () {
        this.$http.get('/admin/menu/entry')
            .then(res => {
                this.$store.commit('updata_list', res.data.data)
        })
    }
}
</script>

<style scoped>
.menger{
    width:100%;
    height:100%;
}
.button{
    text-align: center;
    margin:30px 0;
}
.button button{
    width: 172px;
    height:44px;
    font-size: 18px;
    color: #212121;
    border:1px solid #979797;
    border-radius: 10px;
    background: rgba(0,0,0,0)
}
button.active{
    background:#01b0b9;
color: #fff;
border-color: #01b0b9;
}
.maincont{
    width: 100%;
    height: 100%;;
}
</style>