<template>
  <div>home</div>
</template>

<script setup lang="ts">
import { onMounted, toRaw } from 'vue'
import { getClassNumApi } from '@/api/home/index'
import { loginStore } from '@/stores/module/login'
const loginInfo = loginStore()
onMounted(() => {
  console.log(toRaw(loginInfo.teacher))
})
</script>
