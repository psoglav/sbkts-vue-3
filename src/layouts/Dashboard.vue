<script setup>
import { Header } from '@/components/header'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="h-[100dvh]">
    <div class="flex h-full">
      <sidebar />
      <div class="grow">
        <Header />
        <Suspense>
          <router-view />
        </Suspense>
      </div>
    </div>
  </div>
</template>
