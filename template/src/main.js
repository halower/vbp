// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routestore from '@/config/routestore'
import {apistore} from '@/config/apistore'
import directive from '@/directives'
import store from '@/store'
import eventbus from '@/store/eventbus'

Vue.use(directive)
Vue.use(Router)

const router = new Router({
  routes: routestore,
  mode: 'history'
})

Vue.prototype.$api = apistore
Vue.prototype.$eventbus = eventbus
Vue.config.productionTip = false

new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
