import '../stantic/css/reset.css'
import Vue from 'vue';
import { store } from '../store/store'
import router from '../routers/index.js'
import App from './App.vue'
import '../stantic/font/iconfont.css'
import axios from '../http/axios.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
const cm = new Vue({
    el: '.contains',
    router,
    store,
    render: function(createElement) {
        return createElement(App)
    }
})