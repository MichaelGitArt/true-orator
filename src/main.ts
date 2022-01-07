import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import 'virtual:windi.css'
import './scss/main.scss'

import router from './router/router'

createApp(App)
  .use(router)
  .mount('#app')

registerSW()
