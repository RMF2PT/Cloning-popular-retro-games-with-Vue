import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@views/HomeCmp.vue'
import GameCollection from '@views/GameCollection.vue'
import GameDetails from '@views/GameDetails.vue'
import About from '@views/AboutCmp.vue'
import NotFound from '@views/NotFound.vue'
import TetrisGame from '@games/tetris/TetrisGame.vue'
import TicTacToeGame from '@games/ticTacToe/TicTacToeGame.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/games', name: 'Games Collection', component: GameCollection },
  {
    path: '/games/:id/:slug',
    name: 'game.details',
    component: GameDetails
    // props: (route: any) => ({ id: parseInt(route.params.id) }) // ! This is not necessary
  },
  { path: '/playTetris', name: 'Tetris', component: TetrisGame },
  { path: '/playTicTacToe', name: 'Tic-Tac-Toe', component: TicTacToeGame },
  { path: '/about', name: 'About', component: About },
  { path: '/:catchAll(.*)', name: 'Not found', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'app-active-link'
})

export default router
