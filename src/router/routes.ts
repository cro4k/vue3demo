
const routes =  [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/about/AboutView.vue')
    },
    {
        path: '/example',
        name: 'Example',
        // component: ()=> import('../views/example/Index.vue'),
        redirect: '/example/index',
        children: [
            {
                path: 'index',
                component: () => import('../views/example/Index.vue'),
                name: 'Index',
            },
            {
                path: 'manage',
                component: ()=> import('../views/example/Manage.vue'),
                name: 'Manage',
            },
            {
                path: 'show',
                component: ()=> import('../views/example/Show.vue'),
                name: 'Show',
            }
        ]
    }
]

export default routes
