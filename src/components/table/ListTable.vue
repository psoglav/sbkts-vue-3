<script setup lang="ts">
import { watch } from 'vue'
import { DataTable } from '@/components/ui/data-table'
import { useAsyncModelData } from './composables'

const props = defineProps<{
  model: string
}>()

const { data, pending, columns, error, refresh } = await useAsyncModelData(
  props.model,
)

watch(props, async () => {
  refresh(props.model)
})

watch(error, () => console.log(error.value))
</script>

<template>
  <div class="mx-auto">
    <div class="p-10">
      <h1 class="text-2xl">{{ $route.meta.title }}</h1>
    </div>

    <div
      :style="{
        contain: 'size',
      }"
    >
      <div class="px-10">
        <span v-if="pending">Loading...</span>
        <DataTable v-else :columns="columns" :data="data" />
      </div>
    </div>
  </div>
</template>
