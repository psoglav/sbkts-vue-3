<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppHeader } from '@/components/app-header'
import { Toaster } from '@/components/ui/sonner'
import { Default, Dashboard } from '@/layouts'

export default {
  components: {
    AppHeader,
    Toaster,
    Default,
    Dashboard,
  },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout ?? 'default')

    return {
      layout,
    }
  },
}
</script>

<template>
  <div class="h-[100dvh] flex flex-col">
    <app-header />
    <component :is="layout">
      <router-view />
    </component>
    <toaster />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
