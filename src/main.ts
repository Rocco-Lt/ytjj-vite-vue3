import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd, { ConfigProvider } from 'ant-design-vue';
import { setupStore } from '@/stores/index';
import store from 'store';
import Cookie from 'js-cookie'
import '@/assets/base.css'
import 'ant-design-vue/dist/antd.variable.min.css';

const app = createApp(App)

app.config.globalProperties.$LocalStore = store;
app.config.globalProperties.$cookie = Cookie;
ConfigProvider.config({
    theme: {
        primaryColor: '#44b1b6',
    },
});
// 挂载vuex状态管理
setupStore(app);
app.use(Antd)
app.use(router)
app.mount('#app')
