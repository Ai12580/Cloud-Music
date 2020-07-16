import {request} from '@/network/request'

export function getUserPlayRecord(uid) {
  return request({
    method: 'get',
    url: '/user/record',
    params: {
      uid,
      type: 1
    }
  })
}

// 加random的作用是使得get请求不走缓存
export function getUserLikelist(uid) {
  return request({
    method: 'get',
    url: '/likelist',
    params: {
      uid,
      random: Math.random()
    },
    withCredentials: true
  })
}

export function getUserPlaylist(uid) {
  return request({
    method: 'get',
    url: '/user/playlist',
    params: {
      uid
    }
  })
}