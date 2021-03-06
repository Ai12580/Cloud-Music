import {request} from '@/network/request'

export function getSongDetail(ids) {
  return request({
    method: 'get',
    url: '/song/detail',
    params: {
      ids
    }
  })
}
