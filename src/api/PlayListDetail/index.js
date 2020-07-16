import {request} from '@/network/request'

export function getPlayListDetail(id) {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id,
      random: Math.random()
    }
  })
}
