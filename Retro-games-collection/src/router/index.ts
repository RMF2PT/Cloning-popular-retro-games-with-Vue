import { createRouter, createWebHashHistory } from 'vue-router'
// import type { RouteLocationNormalized } from 'vue-router'

import Home from '@/components/views/HomeCmp.vue'
import GameCollection from '@/components/views/GameCollection.vue'
import GameDetails from '@/components/views/GameDetails.vue'
import About from '@/components/views/AboutCmp.vue'
import NotFound from '@/components/views/NotFound.vue'
import TetrisGame from '@/components/games/tetris/TetrisGame.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/games', name: 'Games Collection', component: GameCollection },
  {
    path: '/games/:id/:slug',
    name: 'game.details',
    component: GameDetails,
    props: (route) => ({ id: parseInt(route.params.id) })
  },
  { path: '/play', name: 'TetrisGame', component: TetrisGame },
  { path: '/about', name: 'About', component: About },
  { path: '/:catchAll(.*)', name: 'Not found', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'app-active-link'
})

export default router
