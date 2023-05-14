/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-04-12 00:06:55
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-05-02 01:21:31
 * @FilePath: /ytjj-vite-vue3/src/api/login/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "@/utils/request";
import type { LoginResponse } from '@/views/login/loginType'
//获取token
export async function loginApi(loginData: API.LoginParams): Promise<LoginResponse> {
    return request(
        {
            url: '/frontLogin',
            method: 'post',
            data: loginData, // post参数
            headers: {
                isToken: false
            }
        }
    )
}

// 获取登录者的信息
export function frontGetInfoApi() {
    return request({
        url: '/frontGetInfo',
        method: 'get', // 请求方式           
    })
}