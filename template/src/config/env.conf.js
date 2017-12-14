/**
 *  服务配置项
 * @param baseURL 服务请求的根路径
 */
let baseUrl = '' 

switch (process.env.NODE_ENV) {
  case 'development': {
    baseUrl = ''
    break
  }
  case 'production': {
    baseUrl = ''
    break
  }
  case 'test': {
    baseUrl = ''
    break
  }
}

export {
  baseUrl
}
