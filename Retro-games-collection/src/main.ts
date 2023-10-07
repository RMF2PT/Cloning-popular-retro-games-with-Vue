import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faDice } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faDice)

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
