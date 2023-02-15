import {createStore} from 'vuex'
import user from "@/store/modules/user";

export default createStore({
    state: {
        isMenuCollapse: false
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user
    }
})
