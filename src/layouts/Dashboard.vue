<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="dashboard-layout">
    <sidebar />
    <slot />
  </div>
</template>
