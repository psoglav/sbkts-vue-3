import axios from 'axios'
import { defineStore } from 'pinia'

type AppConfig = {
  name: string
  title: string
  camera: {
    width: number
    height: number
    quality: number
  }
}

interface State {
  config: AppConfig | null
}

export const useAppStore = defineStore('app', {
  state: (): State => ({
    config: null,
  }),
  actions: {
    async fetchConfig() {
      try {
        const { data } = await axios.get('/config.json')
        this.config = data
        return data
      } catch (e: any) {
        console.error(e.message)
      }
    },
  },
})
