import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './scss/main.scss'

import router from './router/router'

createApp(App)
  .use(router)
  .mount('#app')
