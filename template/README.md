## 编译

``` bash
# 安装依赖
npm install

# 热重载 localhost:8080
npm run dev

# 生产模式（压缩）
npm run build or npm run pro

# 构建生产并查看捆绑分析器报告
npm run build --report or npm run pro --report
```
# 项目说明

## 组件相关文件夹说明 (components)
> 该文件夹建议只写组件

`怎么判断是组件？`
>是不是可以复用,原则上可以复用的需要抽离成组件，不能复用无需组件化.


## 配置相关文件夹说明 (config)

### `req.conf.js`
- 功能:
> 集中管理各个业务模块的后端请求地址,便于排错和集中管理
- 用法：
>  每个模块都导出一个本模块的地址对象即可
 ```
  export const demo(模块名称) = {
    test: '/api/test' //只需要写相对路径路径
  }
 ```

### `service.conf.js`
- 功能: 按照项目的需求初始化一些服务的配置参数,例如请求`http://127.0.0.1/api/test`,则根路径(`baseUrl`)为`http://127.0.0.1`,这样在`req.conf.js`只需要写相对路径，其中```baseUrl```为必须参数
> 

### `apistore.js`
- 功能:
>   作为所有业务请求的入口,将所有的http相关的处理从页面组件中剥离,在服务模块中集中处理完复杂逻辑等操作，减少页面臃肿程度.
- 页面调用方法：(我们将所有的服务模块全部包装到this.$api中,以便识别服务)
``` 
 this.$api.user.adduser({name:'halower'}) 
 ```
- 依赖文件:
>  `req.conf.js`、 `fetch(文件夹)`

### `baseapi.js`
- 功能:
> 作为所有服务对象的基类,包含了请求地址代理,统一的请求入口(`get,post` ect.)

### `routestore.js`
- 功能:
> 集中的路由管理中心,将各个业务模块中的路由统一整理合并
- 用法：
1. 导入每个业务模块的路由单元 
```
import demo from '@/pages/demo/z-routes
```
2.  添加业务路由
```
routes = routes.concat(demo)
```
## 指令相关文件夹说明 (directives)

功能
全局指令处理，只需要在此处使用Vue.directive即可扩展项目的指令集

## 业务服务相关文件夹说明 (fetch)
- 功能
> 将繁琐的数据处理和关联性的逻辑操作从页面中剥离,降低服务与页面的耦合
- 用法
1. 引入服务基类并继承它
2. 方法中的url路径需要使用到`/config/req.conf.js` 的模块,由于已经使用代理处理过，因此只需要使用`this.业务模块名.请求地址`的模式即可以获取真实请求路径
```
import BaseApiController from '@/config/baseapi'

/**
 * @class 演示业务功能
 */
class DemoApiController extends BaseApiController {
    /*
    * @method 这里我们只做演示
    */
    test () {
       // 假设这里有很复杂的前端逻辑
      return this.get([this.demo.test], {}).then(res => {
       return res.data
     })
    } 
 }
export default new DemoApiController()
```
- 依赖文件:
>  `req.conf.js`

## 业务页面相关文件夹 （pages）
- 功能
> 编写各个业务模块的页面,每个页面都可以独立配置自己的自己独立的业务路由
- 约定
>
1. 建议路由按照业务模块层级命名,可以有效地避免非规则的命名给我们造成的路由冲突的困扰
2. 每个业务模块下都使用z-routes.js命名路由的配置文件，这样做仅仅是统一的将路由文件至于 该文件夹的最底下，当然你可以不这么做。
- 用法
> 在配置完路由后，请按照config中的说明文档，将路由导入 routestore.js

## 状态相关管理文件夹 (store)
- 功能
> 统一管理项目状态,在复杂的交互项目中可以启用该模块，可以减少事件的不便性

- 使用方法
> 
1. `mutation-types.js` 在这里进行mutation命名的统一管理
```
 export const CHANGE_NAME = 'CHANGE_NAME' // 测试更改模块名称
```
在各个模块中可以使用如下方式引用，使用 ` [types.CHANGE_NAME]` 方式获取

```
import * as types from '@/store/mutation-types' 
```

2. 在`modules`文件夹中编写对应的模块，可以引用`fetch`文件夹中的服务在actions中处理业务
3. 写完模块状态管理后，在`index.js`中引入相应模块
```
 modules: {
    test
  }
```
4. 页面使用
```
<template>
 <div>
    <h2>当前模块：demo2</h2>
    <h1></h1>
    <button @click="changeName('测试')">改变模块名称</button>
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("test");

export default {
  name: "HelloWorld",
  computed: {
    ...mapState(['name']),
    ...mapGetters(['greet'])
  },
  methods: {
    ...mapActions(['changeName'])
  }
};
</script>
```
5. 说明
 - 模块中需要使用 `namespaced: true` 标记
 - 根节点状态可以直接在 `index.js` 编写
 - 能不用this.$store 最好不要使用，保持页面整洁

6. `eventbus.js` 主要用于简单的非父子组件交互通信使用
> 使用方法
```
this.$eventbus.on(event: string | Array<string>, fn: Function)
this.$eventbus.emit(event: string, data: Object)
```
