<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, ref } from 'vue'

import NavigationGroup from './NavigationGroup.vue'
import NavigationLink from './NavigationLink.vue'

const appStore = useAppStore()

const navMenuItems = computed(() => {
  return appStore.routes.map((route) => {
    return {
      title: route.meta.title,
      icon: route.meta.icon,
      children: route.children.map((child) => ({
        title: child.meta.title,
        path: `${route.path}/${child.path}`,
      })),
    }
  })
})

const openedGroup = ref(0)

function toggle(i: number) {
  openedGroup.value = openedGroup.value === i ? -1 : i
}
</script>

<template>
  <nav class="w-full space-y-1">
    <NavigationGroup
      v-for="(group, i) in navMenuItems"
      :key="i"
      :title="group.title"
      :icon="group.icon"
      :open="openedGroup === i"
      @update:open="toggle(i)"
    >
      <NavigationLink
        v-for="(item, k) in group.children"
        :key="k"
        :title="item.title"
        :to="item.path"
      />
    </NavigationGroup>
  </nav>
</template>
