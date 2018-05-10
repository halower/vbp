## vbp 帮你自动搭建一个简单易用的前端业务框架。
```
需要先安装nodejs
npm install vue-cli               安装官方的vue-cli
vue init halower/vbp mypro        halower/vbp 是海龙放置项目的github地址  mypro是自己项目的名字
初始化项目的时候除了soket暂时不需要，其他建议都选择y

cd mypro                          将命令行路径转到项目内 也可以关了到项目内再打开
npm install                       此命令将安装项目packa.json中记录的node_modules依赖包

npm run dev                       开发环境热加载项目  会自动打开网页，并在修改代码保存之后，更新网页
npm run build                     上线环境打包命令，会生成dist文件夹，内部包含src目录下所有的文件
                                  注意建议放在服务器根目录不然的话需要修改配置才能正常（原因为，打包默认为绝对路径）访问
文件/文件夹介绍
index.html                        项目html文件，只有这一个html
build、config、test               webpack配置以及测试文件夹(一般不需要关心，需要修改webpack配置可以重点关注一下)
static                            不需要打包编译的静态文件（npm run build之后会直接放到dist/static里面）
src                               源码文件夹
    main.js                       项目入口，所有文件都是从这里开始
    app.vue                       app入口，默认有一个<router-view/>作为路由的容器
    assets                        静态资源文件夹（可以存放图片、静态css，js，视频等等），会通过webpack进行打包
                                  所以使用这里面的文件的时候请使用 import或者require的方式进行引入
    components                    公共组件文件夹，项目用到的公共模块的存放地方（比如下拉框、table等等）如果引用第三方库，根据需要自行放置
    config                        项目配置文件夹，包括api，route，多语言的配置
          api                     项目api的配置文件夹
              api.conf.js         项目的后台接口配置文件。
              api.store,js        项目api的集中的地方，如果新增了自己的与后台交互的模块，需要在这里引入
              baseapi.js          对官方的axios进行二次封装的地方
          env                     后台服务器地址配置
              env.conf,json       后台地址记录json
              env.export.js       后台地址分发的js
           i18n                   多语言配置（大多项目暂时不需要配置多语言）
           routes                 项目路由配置
               index.js           路由配置初始化的地方，
                                  其中 mode: 'history' ，是前台的路由模式，history会去掉浏览器url中的#，这个需要服务器将404重定向到index.html中
                                  scrollBehavior是路由变化是的统一行为（目前是自动回到页面顶部）
               routes.store.js   将其他路由统一引入的文件
           directives             vue自定义指令文件夹
           fetch                  具体的逻辑处理文件夹，比如与后台交互需要进行数据处理等等
           filters                vue自定义过滤器文件夹
           languages              多语言具体文件存放
           mixins                 混入文件夹（不用管）
           pages                  具体页面文件夹（建议是每一个页面自己相应的配置z-routers.js,如果配置了，需要引入到routes.store.js中）
           store                  vuex（项目状态存放文件夹），通常用来存放项目中公共的状态，比如用户名，等等，其他的也可以分别加入
                                  需要注意的是，store的获取可以使用getter 和state      但是修改只能使用mutation，否则vue不会动态监听

```

#### QQ讨论群:`255965810`
# 如何使用
```
$ npm install -g vue-cli
$ vue init halower/vbp  my-project
$ cd my-project
$ npm install
$ npm run dev
```

# 项目说明

## 组件相关文件夹说明 (components)
> 该文件夹建议只写组件

`怎么判断是组件？`
>是不是可以复用,原则上可以复用的需要抽离成组件，不能复用无需组件化.


## 配置相关文件夹说明 (config)

### `api.conf.js`
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
- 功能: 按照项目的需求初始化一些服务的配置参数,例如请求`http://127.0.0.1/api/test`,则根路径(`baseUrl`)为`http://127.0.0.1`,这样在`api.conf.js`只需要写相对路径，其中```baseUrl```为必须参数
> 

### `api.store.js`
- 功能:
>   作为所有业务请求的入口,将所有的http相关的处理从页面组件中剥离,在服务模块中集中处理完复杂逻辑等操作，减少页面臃肿程度.
- 页面调用方法：(我们将所有的服务模块全部包装到this.$api中,以便识别服务)
``` 
 this.$api.user.adduser({name:'halower'}) 
 ```
- 依赖文件:
>  `api.conf.js`、 `fetch(文件夹)`

### `baseapi.js`
- 功能:
> 作为所有服务对象的基类,包含了请求地址代理,统一的请求入口(`get,post` ect.)

### `routes.store.js`
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
2. 方法中的url路径需要使用到`/config/api.conf.js` 的模块,由于已经使用代理处理过，因此只需要使用`this.业务模块名.请求地址`的模式即可以获取真实请求路径
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
>  `api.conf.js`

## 业务页面相关文件夹 （pages）
- 功能
> 编写各个业务模块的页面,每个页面都可以独立配置自己的自己独立的业务路由
- 约定
>
1. 建议路由按照业务模块层级命名,可以有效地避免非规则的命名给我们造成的路由冲突的困扰
2. 每个业务模块下都使用z-routes.js命名路由的配置文件，这样做仅仅是统一的将路由文件至于 该文件夹的最底下，当然你可以不这么做。
- 用法
> 在配置完路由后，请按照config中的说明文档，将路由导入 routestore.js

## 多语言相关文件夹 （languages）
建议按照不同的业务需要添加分组翻译，便于整理，添加不同的语言类型后在 ```config/i18n.js```引入相应的语言包

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
  name: "helloworld",
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
#### 目前正在使用的企业
<a href='http://www.28zn.cn'><img src='http://www.28zn.cn/Public/Home/images/logo.png'/></a>
