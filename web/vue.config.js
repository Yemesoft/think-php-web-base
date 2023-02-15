const {defineConfig} = require('@vue/cli-service')
console.log('process.env.VUE_APP_API', process.env.VUE_APP_API)
module.exports = defineConfig({
    outputDir: '../portal',
    publicPath:'/portal/',
    transpileDependencies: true,
    devServer: {
        port: 8081, // 访问端口
        proxy: {
            [process.env.VUE_APP_API]: {
                // 拦截器(拦截链接中有/api)
                target: process.env.VUE_API_DEV_TARGET + process.env.VUE_APP_API,
                changeOrigin: true,	// 是否跨域
                pathRewrite: {
                    // '^/api': ''
                    [`^${process.env.VUE_APP_API}`]: ''
                    // 配置出来的接口没有 /api
                    // 比如/api/admin/being/classes/classInfo 会被替代成/admin/being/classes/classInfo
                }
            }
        }
    },

})
