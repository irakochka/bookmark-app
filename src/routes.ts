import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stors/auth.store.ts'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: import('./views/AuthView.vue'),
      name: 'auth'
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/IndexView.vue'),
          name: 'main',
        },
        {
          path: ':alias',
          component: () => import('./views/CategoryView.vue'),
        },
      ]
    },
    {
      path: '/:patchMatch(.*)*',
      component:  import('./views/NotFoundView.vue'),
      name: "NotFound"
    },
  ],
  history:  createWebHistory()
})

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name != 'auth') {
    return { name: 'auth' }
  }
})
