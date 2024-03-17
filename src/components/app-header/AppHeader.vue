<script setup lang="ts">
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle.vue'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const appStore = useAppStore()
const authStore = useAuthStore()

async function onLogout() {
  authStore.logout()
  await router.push('/login')
}
</script>

<template>
  <header class="p-2 flex justify-between items-center border-b border-border">
    <div class="text-lg font-bold px-2">{{ appStore.config?.name }}</div>
    <div class="flex items-center gap-2">
      <ThemeToggle />
      <Button
        v-if="authStore.isAuthenticated"
        variant="outline"
        size="icon"
        @click="onLogout"
      >
        <Icon icon="mdi:logout" />
      </Button>
    </div>
  </header>
</template>
