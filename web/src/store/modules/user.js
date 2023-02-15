import * as Constants from '@/store/constants'
import {login} from '@/api/user'

const state = {}

const mutations = {
    [Constants.LOGIN](state, data) {

    }
}

const actions = {
    [Constants.LOGIN]: ({commit}, data) => {
        return new Promise((resolve, reject) => {
            login(data).then(response => {
                commit(Constants.LOGIN, response.data)
            }).catch(error => {

            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
