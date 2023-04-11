import { defineStore } from 'pinia';
import { loginApi, frontGetInfoApi } from '@/api/login/index'
import Cookie from 'js-cookie'

interface {
    roles: <string>[],
}
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
        async getToken(params) {
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