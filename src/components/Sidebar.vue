<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

async function onLogout() {
  authStore.logout()
  await router.push('/login')
}
</script>

<template>
  <div
    class="sidebar flex-col max-w-[240px] w-full gap-1 border-r border-border h-full grid grid-rows-[min-content_1fr]"
  >
    <div class="p-2 border-b border-border">
      <Button
        v-if="authStore.isAuthenticated"
        variant="outline"
        size="icon"
        @click="onLogout"
      >
        <Icon icon="mdi:logout" />
      </Button>
    </div>
    <ScrollArea class="h-full p-2">
      <Navigation />
    </ScrollArea>
  </div>
</template>
