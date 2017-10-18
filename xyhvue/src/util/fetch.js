/**
 * Created by xyh on 2017/10/17.
 */
import axios from 'axios'
import jsonp from 'jsonp'
import { Toast } from 'mint-ui'
import store from '../store'
import router from '../router'

// 创建axios实例
const fetch = axios.create({
  timeout: 5000                  // 请求超时时间
})

// request拦截器
fetch.interceptors.request.use(config => {
  if (config.params) {
    config.params = {
      ...config.params
    }
    if (store.getters.information) {
    }
  }

  if (config.data) {
    config.data = {
      ...config.data
    }
    if (store.getters.information) {
    }
  }
  return config
})

fetch.interceptors.response.use(
  response => {
    if (response.data.status === 10002) {
      router.push({
        path: '/permission-denied'
      })
    }
    return response.data
  },
  error => {
    console.log('err' + error)// for debug
    Toast({
      message: error.message,
      position: 'top',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export {
  fetch,
  jsonp
}
