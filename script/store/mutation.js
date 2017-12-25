import axios from '../http/axios'
const mutation = {
    updataUserMsg (state, userName) {
        state.userName = userName
    },
    updata_list (state, data) {
        state.list = data
    },
    updata_active_name (state, name) {
        state.active_name = name
    },
    updata_loading (state, data) {
        state.loading = data
    },
    updata_image (state, data) {
        state.imageUrl.push(data)
    },
    updata_resident_list (state, data) {
        state.resident = data.list;
         state.sumPages= data.len;
    },
    replace_resident (state, data) {
        state.resident = data;
    },
    setAuthorzation (state, data) {
        state.authorzation = data;
    },
    updata_apply_list (state, data) {
        state.apply_list = data;
    },
    updata_sumPages (state, data) {
        state.sumPages = data
    }
}
export default mutation;