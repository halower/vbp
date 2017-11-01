{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import Router from 'vue-router'
import router from '@/config/routestore'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import {apistore} from '@/config/apistore'
import directive from '@/directives'
import store from '@/store'
import eventbus from '@/store/eventbus'

Vue.use(directive)
{{#router}}
Vue.use(Router)

const router = new Router({
  routes: routestore,
  mode: 'history'
})
{{/router}}

Vue.prototype.$api = apistore
Vue.prototype.$eventbus = eventbus
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

new Vue({
  el: '#app',
  store,
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
