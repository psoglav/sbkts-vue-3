import axios from 'axios'
import api from '@/api/client'
import { defineStore } from 'pinia'
import { useColorMode } from '@vueuse/core'

const theme = useColorMode()

export const useAppStore = defineStore('app', {
  state: (): State => ({
    config: null,
    routes: [],
  }),
  actions: {
    async fetchConfig() {
      try {
        const { data } = await axios.get('/config.json')
        this.config = data
        return data
      } catch (e: any) {
        throw new Error('Failed to fetch app config: ' + e.message)
      }
    },
    async fetchRoutes() {
      try {
        const { data } = await api.get('/utils/MainMenu')
        this.routes = data
      } catch (e: any) {
        throw new Error('Failed to fetch main menu: ' + e.message)
      }
    },
    setTheme(value: 'light' | 'dark' | 'auto') {
      theme.value = value
    },
  },
})

type AppConfig = {
  name: string
  title: string
  camera: {
    width: number
    height: number
    quality: number
  }
}

type MainMenuItem = {
  path: string
  name: string
  meta: {
    title: string
    icon: string
    roles: string[]
    noCache: boolean
  }
  controllerName: string
  props: {
    component: string
    dataRequest: string
    model: string
  } | null
  component: any
} & any

interface State {
  config: AppConfig | null
  routes: MainMenuItem[]
}
