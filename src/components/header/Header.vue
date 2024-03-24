<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import HeaderBreadcrumb from './HeaderBreadcrumb.vue'
</script>

<template>
  <header class="p-2 flex justify-between items-center border-b border-border">
    <div class="px-4">
      <HeaderBreadcrumb />
    </div>
    <div class="flex items-center gap-2">
      <ThemeToggle />
    </div>
  </header>
</template>
