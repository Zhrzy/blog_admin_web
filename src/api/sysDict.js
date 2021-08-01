import request from '@/utils/request'

export function getDict(params) {
    return request({
      url: '/admin/dictData/getDictByTypes',
      method: 'post',
      data: params
    })
}