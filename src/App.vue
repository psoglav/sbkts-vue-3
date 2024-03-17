<script lang="ts" setup>
import { AppHeader } from '@/components/app-header'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div class="h-[100dvh] flex flex-col">
    <app-header />
    <router-view />
    <toaster />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
