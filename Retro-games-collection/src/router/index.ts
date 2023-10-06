import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/HomeCmp.vue'
import GameCollection from '@/components/GameCollection.vue'
import About from '@/components/AboutCmp.vue'
import Contact from '@/components/ContactCmp.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/games', name: 'Games Collection', component: GameCollection },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:catchAll(.*)', name: 'Not found', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'app-active-link'
})

export default router
