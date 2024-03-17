<script setup lang="ts">
defineProps<{
  title: string
  to: string
}>()
</script>

<template>
  <router-link
    class="px-4 py-2 pl-6 text-sm hover:text-foreground text-muted-foreground inline-flex transition-colors"
    active-class="text-foreground"
    :to="to"
  >
    {{ title }}
  </router-link>
</template>
