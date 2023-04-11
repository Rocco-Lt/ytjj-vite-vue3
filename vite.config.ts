import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
//按需加载
// import Components from 'unplugin-vue-components/vite';
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // Components({
    //   resolvers: [AntDesignVueResolver()],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), //配置引入别名@表示src为根目录
    }
  },
  //添加公用scss文件
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/assets/style/index.scss";' // 添加公共样式
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://sit.ytjj.vip/',
        changeOrigin: true, //是否跨域
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
