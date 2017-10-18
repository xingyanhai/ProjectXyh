/**
 * 统一的异步请求发送处理，使用axios库
 * Created by xyh on 2017/10/17.
 */

import { fetch, jsonp } from '../../util/fetch.js'

// faf
export function getGoodsList (params = {}) {
  return fetch({
    url: 'http://r.qzone.qq.com/cgi-bin/user/cgi_personal_card?uin=QQ',
    params
  })
}

export function getSomething (params, callback) {
  let url = 'http://suggest.taobao.com/sug?code=utf-8'
  if (params && typeof params === 'object') {
    for (let key in params) {
      url += `&${key}=${params[key]}`
    }
  }
  jsonp(url, params, callback)
}

