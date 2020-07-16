import {request} from '@/network/request'

//获取主页轮播图
export function getBanner() {
  return request({
    method: 'get',
    url: '/banner'
  })
}

//获取主页推荐歌单
export function getRecommendSongList() {
  return request({
    method: 'get',
    url: '/personalized'
  })
}