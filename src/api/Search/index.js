import {request} from '@/network/request'

export function getHotSearch() {
  return request({
    method: 'get',
    url: '/search/hot/detail'
  })
}