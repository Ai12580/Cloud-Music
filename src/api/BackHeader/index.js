import {request} from '@/network/request'

export function getSearchSuggestions(userInput) {
  return request({
    method: 'get',
    url: `/search/suggest?keywords=${userInput}&type=mobile`
  })
}