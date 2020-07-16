import {request} from '@/network/request'

export function logout() {
  return request({
    method: 'get',
    url: '/logout',
    withCredentials: true,
    params: {
      random: Math.random()
    }
  })
}

export function getLoginStatus() {
  return request({
    method: 'get',
    url: '/login/status',
    withCredentials: true,
    params: {
      random: Math.random()
    }
  })
}

export function getUserDetail(uid) {
  return request({
    method: 'get',
    url: '/user/detail',
    params: {
      uid
    }
  })
}