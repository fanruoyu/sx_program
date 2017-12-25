<template>
    <div class='plublic'>
        <div class="button">
            <button @click='changeMsg' :class="{active: !bool}">信息管理</button>
            <button  @click='changeActiv'  :class="{active: bool}">活动管理</button>
        </div>
        <components :is='page'></components>
    </div>
</template>
<script>
import MengerCont from './MsgCont/MengerCont.vue'
import ActCont from './ActCont/ActCont.vue'
export default {
    data () {
        return {
            page:'ActCont',
            bool: true
        }
    },
    components: {
        MengerCont,
        ActCont
    },
    methods: {
        changeMsg () {
            this.page = 'MengerCont';
            this.bool =false;
        },
        changeActiv () {
            this.page = 'ActCont'
            this.bool = true;
        }
    },
    created () {
        this.$http.get('/admin/menu/public')
            .then(res => {
                this.$store.commit('updata_list', res.data.data)
        })
    }
}
</script>
<style scoped>
.plublic{
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
</style>