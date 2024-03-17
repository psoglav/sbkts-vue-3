<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

defineProps<{
  title: string
  icon?: string
}>()

const open = defineModel<boolean>('open')
</script>

<template>
  <Collapsible v-model:open="open">
    <CollapsibleTrigger as-child>
      <div
        class="w-full cursor-pointer select-none inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-3 text-sm justify-start"
        :class="{
          'bg-accent text-accent-foreground': open,
        }"
      >
        <Icon v-if="icon" :icon="icon" class="mr-2 size-4" />
        {{ title }}
        <Icon
          icon="material-symbols:arrow-back-ios-new"
          class="ml-auto size-3 transition-transform"
          :class="[open ? 'rotate-90' : '-rotate-90']"
        />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="flex flex-col">
      <slot />
    </CollapsibleContent>
  </Collapsible>
</template>
