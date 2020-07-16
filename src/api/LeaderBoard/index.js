import {request} from '@/network/request'

export function getToplistDetail() {
  return request({
    method: 'get',
    url: '/toplist/detail'
  })
}