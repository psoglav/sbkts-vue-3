<script lang="ts" setup>
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div class="h-[100dvh] flex flex-col">
    <router-view />
    <toaster />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
