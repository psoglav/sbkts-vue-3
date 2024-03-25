<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

import NavigationGroup from './NavigationGroup.vue'
import NavigationLink from './NavigationLink.vue'

const appStore = useAppStore()
const route = useRoute()

const navMenuItems = computed(() => {
  return appStore.routes.map((route) => {
    return {
      title: route.meta.title,
      icon: route.meta.icon,
      path: route.path,
      children: route.children.map((child) => ({
        title: child.meta.title,
        path: `${route.path}/${child.path}`,
      })),
    }
  })
})

const openedGroup = ref(0)

watch(
  route,
  () => {
    const groupIndex = navMenuItems.value.findIndex((el) => {
      return route.path.startsWith(el.path)
    })

    if (groupIndex != -1) {
      openedGroup.value = groupIndex
    }
  },
  {
    immediate: true,
  },
)

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
