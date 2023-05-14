<template>
  <Header class="header" />
  <div class="son-body">
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/components/header/index.vue'
</script>
<style lang="scss" scoped>
.son-body {
  margin-top: 100px;
  padding: 20px;
}
</style>
>
