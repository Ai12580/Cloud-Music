import {request} from '@/network/request'

export function login(phone, password) {
  return request({
    method: 'get',
    url: '/login/cellphone',
    params: {
      phone,
      password,
      random: Math.random()
    },
    withCredentials: true
  })
}