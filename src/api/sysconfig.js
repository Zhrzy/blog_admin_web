import request from '@/utils/request'

export function getDict(param) {
    return request({
      url: '/sysconfig/getDict',
      method: 'post',
      params: { param }
    })
}