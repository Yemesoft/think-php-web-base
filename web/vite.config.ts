import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

const path = require('path')

export default defineConfig(({command, mode}) => {
    console.log('mode',mode)
    const env = loadEnv(mode, process.cwd())
    const VITE_APP_API = env.VITE_APP_API
    const VITE_API_DEV_TARGET = env.VITE_API_DEV_TARGET
    console.log('VITE_APP_API', VITE_APP_API);
    console.log('VITE_API_DEV_TARGET', VITE_API_DEV_TARGET);
    return {
        base: '/portal/',
        plugins: [
            vue(),
            VueSetupExtend(),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ],
        optimizeDeps: {
            include: ['schart.js']
        },
        resolve: {
            alias: {  // 这里就是需要配置resolve里的别名
                "@": path.join(__dirname, "./src"), // path记得引入
                // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
            },
        },
        publicDir: "public",
        build: {
            outDir: '../portal'
        },
        //本地运行配置，以及反向代理配置
        server: {
            host: "localhost",
            port: 8081, // 访问端口
            proxy: {
                [VITE_APP_API]: {
                    target: VITE_API_DEV_TARGET,
                    changeOrigin: true,
                    // rewrite: (path) => {
                    //     console.log('try rewrite:' + path)
                    //     return path
                    // }
                }
            },
            // proxy: {
            //     [process.env.VUE_APP_API]: {
            //         // 拦截器(拦截链接中有/api)
            //         target: process.env.VUE_API_DEV_TARGET + process.env.VUE_APP_API,
            //         changeOrigin: true,	// 是否跨域
            //         rewrite: {
            //             // '^/api': ''
            //             [`^${process.env.VUE_APP_API}`]: ''
            //             // 配置出来的接口没有 /api
            //             // 比如/api/admin/being/classes/classInfo 会被替代成/admin/being/classes/classInfo
            //         }
            //     }
            // }
        },
    }
});
