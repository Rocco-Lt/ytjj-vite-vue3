import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { notification } from 'ant-design-vue';
import Cookie from 'js-cookie'
export interface RequestOptions {
    /** 当前接口权限, 不需要鉴权的接口请忽略， 格式：sys:user:add */
    permCode?: string;
    /** 是否直接获取data，而忽略message等 */
    isGetDataDirectly?: boolean;
    /** 请求成功是提示信息 */
    successMsg?: string;
    /** 请求失败是提示信息 */
    errorMsg?: string;
    /** 是否mock数据请求 */
    isMock?: boolean;
}

const service = axios.create({
    baseURL: '/api/',
    timeout: 6000,
    withCredentials: true, // send cookies when cross-domain requests
    headers: {
        isToken: true
    }
})

//请求拦截
service.interceptors.request.use(
    (config) => {
        const token = config.headers.isToken ? Cookie.get('token') : null
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Promise.reject(error);
    },
)

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            notification.error({
                message: res.msg
            })
            return Promise.reject(res)
        } else {
            return res;
        }
    }, () => { }
)




export const request = async <T>(config: AxiosRequestConfig,
    options: RequestOptions = {},): Promise<T> => {
    try {
        const { successMsg, errorMsg, permCode, isMock, isGetDataDirectly = true } = options;
        const res: any = await service.request(config);
        return res
    } catch (error) {
        return Promise.reject(error)
    }

}


