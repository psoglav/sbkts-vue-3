<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { Navigation } from '@/components/navigation'
</script>

<template>
  <div
    class="sidebar flex-col max-w-[240px] w-full gap-1 border-r border-border h-full p-2 grid"
  >
    <ScrollArea class="h-full">
      <Navigation />
    </ScrollArea>
  </div>
</template>
