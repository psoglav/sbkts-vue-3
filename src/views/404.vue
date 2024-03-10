<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="container grid place-content-center h-full">
    <div class="flex flex-col gap-8 items-center">
      <div class="gap-2 flex flex-col items-center">
        <div class="text-4xl font-bold">404</div>
        <div class="text-lg flex flex-col items-center">
          Страница не найдена
        </div>
      </div>
      <Button variant="outline" @click="$router.push('/')">Назад</Button>
    </div>
  </div>
</template>
