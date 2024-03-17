<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <header class="p-2 flex justify-between items-center border-b border-border">
    <div class="text-lg font-bold px-2">{{ appStore.config?.name }}</div>
    <div class="flex items-center gap-2">
      <ThemeToggle />
    </div>
  </header>
</template>
