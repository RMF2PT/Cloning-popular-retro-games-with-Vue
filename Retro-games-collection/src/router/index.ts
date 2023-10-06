import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/views/HomeCmp.vue'
import GameCollection from '@/components/views/GameCollection.vue'
import About from '@/components/views/AboutCmp.vue'
import Contact from '@/components/views/ContactCmp.vue'
import NotFound from '@/components/views/NotFound.vue'

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
