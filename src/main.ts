import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import setupRoutes from './router/setupMenu'

async function init() {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  await setupRoutes(router)

  app.mount('#app')
}

init()
