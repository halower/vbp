/**
 *  此文件无需开发者关注
 */
import ENV from '@/config/env/env.conf.json'
let map = new Map()
map.set('development', ENV.development)
map.set('production', ENV.production)
map.set('test', ENV.test)
export default map.get(process.env.NODE_ENV)
