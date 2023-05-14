<template>
  <div>home</div>
  <div @click="newFuc">点击我</div>
  <a-input type="text" @change="newFuc" />
</template>

<script setup lang="ts">
import { onMounted, toRaw } from 'vue'
import { getClassNumApi } from '@/api/home/index'
import { loginStore } from '@/stores/module/login'

const loginInfo = loginStore()
onMounted(() => {
  console.log(toRaw(loginInfo.teacher))
})

const debounce = function (fuc: Function, timer: number) {
  let timeId: any = null
  return function (...args:any) {
    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(() => {
      fuc(...args)
    }, timer)
  }
}

const logValue = function () {
  console.log('wosh')
}

const changeValue = function (e:any) {
  // console.log(e.target.value)
}

const newFuc = debounce(changeValue, 1000)
</script>
