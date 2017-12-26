/**
 *  服务配置项
 * @param baseURL 服务请求的根路径
 */
let REMOTE_ADDR = ''

switch (process.env.NODE_ENV) {
  case 'development': {
    REMOTE_ADDR = ''
    break
  }
  case 'production': {
    REMOTE_ADDR = ''
    break
  }
  case 'test': {
    REMOTE_ADDR = ''
    break
  }
}

export default {
  REMOTE_ADDR
}
