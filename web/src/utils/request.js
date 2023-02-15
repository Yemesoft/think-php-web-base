import axios from 'axios'
import store from '@/store'
import {getToken} from '@/utils/auth'
import {ElMessage, ElMessageBox} from 'element-plus'

const printMessage = function () {
    console.log(...arguments)
}

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000, // request timeout,
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        printMessage("request", config, store.getters.token)
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['login-token'] = getToken()
        }
        printMessage("headers", config.headers)
        printMessage("datas", config.data)
        return config
    },
    error => {
        // do something with request error
        printMessage(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        printMessage("origin response:", response)
        if (200 !== response.status) {
            return Promise.reject(new Error(response.statusText || 'Error'))
        }
        const res = response.data
        printMessage("response:", res)

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 0) {
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                ElMessageBox.confirm('您已退出登录, 您可以点击取消继续停留在此页面或者重新登录', '退出确认', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            } else {
                ElMessage({
                    message: res.message || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        printMessage('err' + error) // for debug
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
