import '@assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faDice, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import {
  faHandBackFist,
  faHandLizard,
  faHand,
  faHandScissors,
  faHandSpock
} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faDice,
  faHandBackFist,
  faHandLizard,
  faHand,
  faHandScissors,
  faHandSpock,
  faArrowsRotate
)

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
