import { request } from "@/utils/request";

export function getClassNumApi(schoolId: any) {
    return request({
        url: `/ytjj/operation/management/list/${schoolId}`,
        method: 'get',
    })
}