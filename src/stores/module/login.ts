/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-04-12 00:06:55
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-04-12 00:40:32
 * @FilePath: /ytjj-vite-vue3/src/stores/module/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
import { loginApi, frontGetInfoApi } from '@/api/login/index'
import Cookie from 'js-cookie'

export const loginStore = defineStore({
    id: "loginInfo",
    state: () => ({
        info: 'asd',
        btnLoading: false,
        roles: ['null'],
        user: null,
        GroupLoginResponseVo: [],
        teacher: {}
    }),
    getters: {

    },
    actions: {
        /** 登录 */
        async getToken(params: API.LoginParams) {
            this.btnLoading = true
            try {
                const { token } = await loginApi(params);
                Cookie.set('token', token);
                return this.getLoginInfo()
            } catch (error) {
                this.btnLoading = false
                return Promise.reject(error);
            }
        },
        // 获取登陆信息
        async getLoginInfo() {
            try {
                //获取信息后
                const { roles, user, GroupLoginResponseVo, teacher }: any = await frontGetInfoApi();
                this.roles = roles;
                this.user = user;
                this.GroupLoginResponseVo = GroupLoginResponseVo;
                this.teacher = teacher;
                this.btnLoading = false;
                return Promise.resolve('success')
            } catch (error) {
                this.btnLoading = false
                return Promise.reject(error);
            }
        },
        //设置角色跳转的路径
        goLayoutPage() {
            this.roles.includes('Group')

        }

    },
    persist: {
        key: 'loginData',
        storage: window.sessionStorage,
        paths: ['teacher', 'roles']

    }
})