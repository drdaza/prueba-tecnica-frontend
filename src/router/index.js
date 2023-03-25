import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/podcast',
      name: 'layout',
      component: () => import('../layouts/LayoutDetails.vue'),
      children: [
        {
          path: ':id',
          name: 'podcast',
          component: () => import('../views/DetailsPodacstView.vue'),
          props: route => ({ id: parseInt(route.params.id) }),
          children: [
            {
              path: 'episode/:idEpisode',
              name: 'episode',
              component: () => import('../views/EpisodeDetails.vue'),
              props: route => ({ idEpisode: parseInt(route.params.idEpisode) })
            }
          ]
        }
      ]
    }

  ]
})

export default router
