import Portal from '@/views/admin'

export default {
    path: '/',
    name: 'PortalMain',
    redirect: '/home',
    component: Portal,
    children: [
        {
            path:'/home',
            name:'Home',
            component: () => import('../views/portal/HomeView.vue')
        }
    ]
}
