<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const route = useRoute()

const items = computed(() => {
  return route.matched
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbLink as-child>
        <RouterLink to="/"> Главная </RouterLink>
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <template v-for="(item, i) in items" :key="i">
        <BreadcrumbItem>
          <BreadcrumbLink
            as-child
            :class="{
              'pointer-events-none': Boolean(item.children),
              'font-normal text-foreground': $route.path === item.path,
            }"
          >
            <RouterLink :to="item.path">
              {{ item.meta.title }}
            </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="i < items.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
