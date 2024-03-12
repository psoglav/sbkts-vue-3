<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const loading = ref(false)
const form = reactive({
  username: '',
  password: '',
})

const submitDisabled = computed(() => {
  return !form.password || !form.username || loading.value
})

async function onSubmit() {
  const { username, password } = form
  loading.value = true
  await authStore.login(username, password)
  await router.push('/')
  loading.value = false
}
</script>

<template>
  <div class="flex items-center flex-grow">
    <Card class="max-w-[320px] w-full mx-auto">
      <CardHeader>
        <CardTitle>Войти</CardTitle>
      </CardHeader>
      <CardContent class="space-y-2">
        <div class="space-y-2">
          <Label for="login">Логин</Label>
          <Input
            id="login"
            v-model="form.username"
            autofocus
            :disabled="loading"
            @keydown.enter="onSubmit"
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Пароль</Label>
          <Input
            id="password"
            v-model="form.password"
            type="password"
            :disabled="loading"
            @keydown.enter="onSubmit"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          class="w-full"
          :disabled="submitDisabled"
          :loading="loading"
          @click="onSubmit"
        >
          Продолжить
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
