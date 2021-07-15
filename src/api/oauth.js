import request from '@/utils/request'

//登录认证
export function login(params) {
    return request({
      url: '/admin/login',
      method: 'post',
      params
    })
  }

export function getInfo(token) {
    return request({
      url: '/admin/getInfo',
      method: 'post',
      params: { token }
    })
}