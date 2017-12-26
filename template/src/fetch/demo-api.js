import BaseApiController from '@/config/api/baseapi'

/**
 * @class 演示业务功能
 */
class DemoApiController extends BaseApiController {
  /*
  * @method 这里我们只做演示
  * @description 假设这里有很复杂的前端逻辑
  */
  test = params => { return this.get(this.demo.test, params).then(res => res.data) }
}
export default new DemoApiController()
