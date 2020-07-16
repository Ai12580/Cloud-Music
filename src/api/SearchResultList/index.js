import {request} from '@/network/request'

export function getCoverImgUrl(albumId) {
  return request({
    method: 'get',
    url: `/album?id=${albumId}`
  })
}