import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import setupRoutes from '@/router/setupMenu'
import { useAppStore } from '@/stores/app'

async function init() {
  const app = createApp(App)

  app.component('Icon', Icon)

  app.use(createPinia())
  app.use(router)

  await useAppStore().fetchConfig()
  await setupRoutes(router)

  app.mount('#app')
}

init()
