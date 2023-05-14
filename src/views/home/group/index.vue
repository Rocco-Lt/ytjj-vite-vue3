<template>
  <div>
    管理员1级的洁面
    {{ homeStorePina.homeLoading }}
    <p>数据分析：{{ homeStorePina.thunms }}</p>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { homeStore } from '@/stores/module/home'
const homeStorePina = homeStore()
onBeforeMount(() => {
  homeStorePina.init()
})
</script>
