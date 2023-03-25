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
      path: '/podcast',
      name: 'layout',
      component: () => import('../layouts/LayoutDetails.vue'),
      children: [
        {
          path: ':id',
          name: 'podcast',
          component: () => import('../views/DetailsPodacstView.vue'),
          props: route => ({ id: parseInt(route.params.id) }),
          
        },
        {
          path: ':idPodcast/episode/:idEpisode',
          name: 'episode',
          component: () => import('../views/EpisodeDetails.vue'),
          props: route => ({idPodcast:parseInt(route.params.idPocast), idEpisode: parseInt(route.params.idEpisode) })
        }
      ]
    }

  ]
})

export default router
