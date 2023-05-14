import { request } from "@/utils/request";

export function getClassNumApi(schoolId: any) {
    return request({
        url: `/ytjj/operation/management/list/${schoolId}`,
        method: 'get',
    })
}

//数据统计
export function getManagementNumApi() {
    return request({
        url: `/ytjj/operation/management/list`,
        method: 'Get',
    })
}