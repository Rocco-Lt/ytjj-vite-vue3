import { request } from "@/utils/request";

//获取token
export function loginApi(loginData: API.LoginParams) {
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