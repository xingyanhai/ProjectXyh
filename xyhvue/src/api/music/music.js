/**
 * Created by xyh on 2017/10/19.
 */

// https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017_42&topid=26&type=top&song_begin=30&song_num=30&g_tk=1602938027&jsonpCallback=MusicJsonCallbacktoplist&loginUin=1101099728&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017_42&topid=26&type=%5Bobject%20Window%5D&song_begin=0&song_num=30&g_tk=1602938027&loginUin=1101099728&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&jsonpCallback=jsonp1508385581727
export function getEncodingUrl (options) {
  let queryString = ''
  let url = options.url
  let uniqueName = 'jsonp' + new Date().getTime()
  let urlParams = {...options.params, jsonpCallback: uniqueName}

  for (let key in urlParams) {
    if (queryString) {
      queryString += '&'
    }
    queryString += key + '=' + encodeURIComponent(urlParams[key])
  }
  return {
    url: url + '?' + queryString,
    jsonpCallback: uniqueName
  }
}

export function jsonp (urlObj, callback) {
  let url = urlObj.url
  let callbackName = urlObj.jsonpCallback

  window[callbackName] = function (data) {
    window[callbackName] = undefined
    document.body.removeChild(script)
    callback(data)
  }

  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

/** =============================================
 *  QQ音乐Api解析简介
 *  将需要用到的API进行分析， 通过getEncodingUr
 *  对URL进行组装，通过jsonp来执行跨域数据获取，
 *  最后通过 apiHandler 方法导出统一的接口
 * =============================================
 * */

let basicParams = {
  g_tk: 1602938027,
  uin: 1101099728, // qq acount
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'h5',
  needNewCode: 1,
  // jsonpCallback: 'jsonp1',
  _: new Date().getTime()
}
// 热歌榜参数
let hotParams = {
  tpl: 3,
  page: 'detail',
  date: '2017_42',
  topid: 26,
  type: 'top',
  song_begin: 0,
  song_num: 30,
  g_tk: 1602938027,
  // jsonpCallback: 'MusicJsonCallbacktoplist',
  loginUin: '1101099728',
  hostUin: 0,
  format: 'jsonp',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'yqq',
  needNewCode: 0
}
let apiList = {
  // 音乐排行榜APi
  topList: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    params: basicParams
  },
  // 热歌榜
  hotList: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
    params: {...hotParams}
  },
  // 流行指数歌曲API
  rankList: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
    params: {
      ...basicParams,
      type: 'top',
      page: 'detail',
      tpl: 3
    }
  },
  // 推荐列表歌曲API
  recommend: {
    url: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    params: {
      ...basicParams,
      pic: 500,
      json: 1,
      type: 1,
      utf8: 1,
      onlysong: 0,
      nosign: 1
    }
  },
  // 首页数据Api
  indexMsg: {
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    params: {
      ...basicParams
    }
  },
  // 热词搜索Api
  hotkey: {
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
    params: {
      ...basicParams
    }
  },
  // 搜索API
  search: {
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
    params: {
      ...basicParams,
      is_xml: 0
    }
  },
  // 全部歌手列表数据ApI
  singerlist: {
    url: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg',
    params: {
      ...basicParams,
      page: 'list',
      channel: 'singer',
      pagesize: 100,
      hostUin: 0,
      needNewCode: 0,
      pagenum: 1
    }
  },
  // 歌手API
  singer: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
    params: {
      ...basicParams,
      begin: 0,
      num: 30,
      order: 'listen',
      from: 'h5',
      songstatus: 1
    }
  }
}
export {
  apiList
}
// return a api handler that expose all api methods

export function apiMusic (api, callback) {
  jsonp(
    getEncodingUrl(
      typeof api === 'string'
        ? apiList[api] : (apiList[api.name].params = Object.assign({}, apiList[api.name].params, api.params), apiList[api.name])
    ),
    callback
  )
}
