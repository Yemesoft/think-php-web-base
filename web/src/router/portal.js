import Portal from '@/views/admin'

export default {
    path: '/',
    name: 'Portal',
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
