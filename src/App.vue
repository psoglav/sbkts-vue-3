<script setup lang="ts">
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div class="h-[100dvh] flex flex-col">
    <Toaster />
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
