import { request } from "@/utils/request";

export function getClassNumApi(schoolId) {
    return request({
        url: `/ytjj/operation/management/list/${schoolId}`,
        method: 'get',          
    })
}