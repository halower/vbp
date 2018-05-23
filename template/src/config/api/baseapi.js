import axios from 'axios'
import envConf from '@/config/env/env.export'
import * as request from '@/config/api/api.conf'

export default class BaseApiController {
  constructor () {
    axios.defaults.timeout = 5000
    axios.defaults.baseURL = envConf.REMOTE_ADDR

    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // todo: 做一些其他日志记录处理
      console.log({
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
        message: error.message
      });
      return Promise.reject(error)
    })
    this._req = request
    Object.keys(this._req).forEach(key => this._proxy(key))
  }

  _proxy (key) {
    let _ = this
    Object.defineProperty(_, key, {
      configurable: false,
      enumerable: true,
      get () {
        return _._req[key]
      },
      set (newVal) {
        _.data[key] = newVal
      }
    })
  }

  get (url, config) {
    return axios.get(url, config)
  }

  post (url, data, config) {
    return axios.post(url, data, config)
  }

  delete (url, config) {
    return axios.delete(url, config)
  }

  put (url, data, config) {
    return axios.put(url, data, config)
  }

  all (promises) {
    return Promise.all(promises)
  }
}
