<template>
  <div class="login">
    <div class="logo-box">
      <img src="@/assets/imgs/common/logo.png" alt="" />
    </div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      layout="vertical"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" placeholder="用户名" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
        placeholder="密码"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button :loading="useLoginStore.btnLoading" type="primary" html-type="submit"
          >登陆</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { random_string } from '@/utils/utils'
import { loginStore } from '@/stores/module/login'
import { to } from '@/utils/awaitTo'
const formState = reactive({
  username: '',
  password: '',
  type: '00', // 类型
  uuid: random_string() // 随机生成32位字符串
})

const useLoginStore = loginStore()
const router = useRouter()
//登陆
const onFinish = async () => {
  try {
    const [err, data] = await to(useLoginStore.getToken(formState))
    if (data) {
      router.push('/home')
    }
  } catch (error) {
    Promise.reject(error)
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(https://estonfile.ytjj.vip/Layer12.png);
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;

  .logo-box {
    width: 25vh;
    height: 10vh;
    margin-bottom: 5vh;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .ant-form {
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 30vh;
    width: 35vh;
    background: #fff;
    .ant-form-item {
      width: 80%;
      :deep(.ant-form-item-control) {
        width: 100% !important;
        max-width: 100%;
      }
      :deep(.ant-form-item-label) {
        display: flex;
      }
     
    }
  }
}
</style>
