import {request} from '@/network/request'

export function getMusicUrl(musicId) {
  return request({
    method: 'get',
    url: '/song/url',
    params: {
      id: musicId
    },
    withCredentials: true
  })
}

export function toggleStarTheSong(musicId, like) {
  return request({
    method: 'get',
    url: '/like',
    params: {
      id: musicId,
      like
    },
    withCredentials: true
  })
}