import axios from 'axios'
import Vue from 'vue'
let $http = axios.create({
    baseURL: 'http://localhost:8888'
})
Vue.prototype.$http = $http;
export default $http;