import axios from '../http/axios'
import {getCookie} from '../utiles/utiles.js'
const actions = {
    updata_resident_list ({ commit }, data) {
        axios.post('/admin/resident', {
            pageSize: data.pageSize,
            count: data.count
        })
        .then((res) => {
            commit('updata_resident_list', res.data);
        })
       
    },
    replace_resident ({ commit }, data) {
        commit('replace_resident', data)
    },
    updata_apply_list ({ commit }) {
        axios.post('/admin/apply')
        .then((res) => {
            commit('updata_apply_list', res.data);
        })
    }
}
export default actions