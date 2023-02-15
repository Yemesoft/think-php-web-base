import Admin from '@/views/admin'

export default {
    path: '/admin',
    name: 'Main',
    redirect: '/dashboard',
    component: Admin,
    children: [
        {
            path:'/dashboard',
            name:'Dashboard',
            component: () => import('../views/admin/Dashboard.vue')
        }
    ]
}
