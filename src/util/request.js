import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = 'token'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => {
    const {
            code,
            data,
          } = response.data

    if (code >= 5000) {
      return Promise.reject(data.message)
    }
    if (code >= 4000) {
      // todo: 权限错误处理
      return Promise.reject('权限错误')
    }
    if (code >= 3000) {
      // todo: message toast
      data.pageInfo
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      return res
    } else {
      return res
    }
  },
  error => {
    alert(error)
    return Promise.reject(error)
  },
)

export default service
