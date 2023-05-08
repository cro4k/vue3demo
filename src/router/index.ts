import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about/AboutView.vue')
    },
    {
      path: '/example',
      name: 'example',
      // component: ()=> import('../views/example/Index.vue'),
      redirect: '/example/index',
      children: [
        {
          path: 'index',
          component: () => import('../views/example/Index.vue'),
          name: 'exampleIndex',
        },
        {
          path: 'manage',
          component: ()=> import('../views/example/Manage.vue'),
          name: 'exampleManage',
        },
        {
          path: 'show',
          component: ()=> import('../views/example/Show.vue'),
          name: 'exampleShow',
        }
      ]
    }
  ]
})

export default router