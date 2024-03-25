import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('user')}`,
  },
})

client.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${useAuthStore().user?.token}`
  return config
})

export default client
