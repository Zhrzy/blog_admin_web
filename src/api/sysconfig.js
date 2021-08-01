import request from '@/utils/request'

export function getSysConfig() {
    return request({
      url: '/admin/sysConfig/getSystemConfig',
      method: 'get'
    })
}

export function editSysConfig(params) {
    return request({
      url: '/admin/sysConfig/editSystemConfig',
      method: 'post',
      data:params
    })
}