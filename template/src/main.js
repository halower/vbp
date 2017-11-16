{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import Router from 'vue-router'
import routestore from '@/config/routestore'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import {apistore} from '@/config/apistore'
import directive from '@/directives'
import store from '@/store'
import eventbus from '@/store/eventbus'
import VModal from 'vue-js-modal'
import VueI18n from 'vue-i18n'
import messages from '@/config/i18n'

Vue.use(directive)
{{#router}}
Vue.use(Router)
Vue.use(VModal, { dialog: true })
Vue.use(VueI18n)

const router = new Router({
  routes: routestore,
  mode: 'history'
})
{{/router}}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

Vue.prototype.$api = apistore
Vue.prototype.$eventbus = eventbus
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
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
