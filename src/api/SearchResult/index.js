import {request} from '@/network/request'

export function getSearchResult(userInput) {
  return request({
    method: 'get',
    url: `/search?keywords=${userInput}`
  })
}