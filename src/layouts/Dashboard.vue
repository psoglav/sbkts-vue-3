<script setup>
import { AppHeader } from '@/components/app-header'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="h-[100dvh]">
    <div class="flex h-full">
      <sidebar />
      <div class="grow">
        <app-header />
        <router-view />
      </div>
    </div>
  </div>
</template>
