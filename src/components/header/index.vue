<template>
  <div class="header-box">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <img src="@/assets/imgs/common/logo.png" alt="" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">班级首页</a-menu-item>
        <a-menu-item key="3">周报下载</a-menu-item>
      </a-menu>
      <div class="userInfo">
        <span>
          {{ teacher.nameCn }}
        </span>
      </div>
    </a-layout-header>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { loginStore } from '@/stores/module/login'
const selectedKeys = ref<string[]>(['1'])
const { teacher }: { teacher: any } = loginStore()
</script>

<style lang="scss" scoped>
.header-box {
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 300;
  height: 100px;
  overflow: hidden;

  .logo {
    height: 100%;
    width: 100px;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ant-layout-header {
    background: none !important;
    overflow: hidden;
  }
  .userInfo {
    display: inline-block;
  }
}
</style>
