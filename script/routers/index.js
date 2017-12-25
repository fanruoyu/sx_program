import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routers'
import {getCookie} from '../utiles/utiles.js'
Vue.use(vueRouter)
const router = new vueRouter({
    linkExactActiveClass: 'active',
    routes
})
router.beforeEach((to, from, next) => {
    if (to.name != 'Login') {
        if (getCookie('token')) {
            next()
        } else {
            next({name: 'Login'});
        }
    } else {
        next()
    }
})
export default router