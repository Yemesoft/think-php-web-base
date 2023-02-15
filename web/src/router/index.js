import {createRouter, createWebHistory} from 'vue-router'
import admin from '@/router/admin'
import portal from '@/router/portal'

const routes = [
    portal,
    admin,
    {
        path: '/404',
        component: () => import('../views/404')
    },
    {
        path: "/:pathMatch(.*)", // 此处需特别注意置于最底部
        redirect: "/404"
    }
]

const router = createRouter({
    mode: 'history',
    base: '/portal/',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
