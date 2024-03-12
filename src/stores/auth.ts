import { defineStore } from 'pinia'
import { isAxiosError } from 'axios'
import api from '@/api/client'
import { toast } from 'vue-sonner'

type User = {
  profileId: number
  profileName: string
  profileRole: number
  token: string
  expired: string
  id: number
  createdBy: number
  created: string
}

interface State {
  user: User | null
}

function storeUser(user: User | null) {
  if (!user) return localStorage.removeItem('user')
  localStorage.setItem('user', JSON.stringify(user))
}

function loadUser(): User | null {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: loadUser(),
    } as State
  },
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    async login(login: string, password: string) {
      try {
        const { data } = await api.post('/session', {
          login,
          password,
        })

        this.user = data
        storeUser(data)
      } catch (err: any) {
        if (isAxiosError(err)) {
          return toast.error('Ошибка авторизации', {
            description: 'Неверный логин или пароль',
            dismissible: true,
          })
        }

        console.error(err.message)
      }
    },
    logout() {
      storeUser(null)
      this.user = null
    },
  },
})
