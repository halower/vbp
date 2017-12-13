{{#if_eq build "standalone"}}
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import Router from 'vue-router'
import { createRouter } from '@/config/routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import { apistore } from '@/config/api/api.store'
import directive from '@/directives'
import * as filters from '@/filters'
import { createStore } from '@/store'
import eventbus from '@/store/eventbus'
import VueI18n from 'vue-i18n'
import messages from '@/config/i18n'
import ProgressBar from '@/components/ProgressBar.vue'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(directive)
{{#router}}
Vue.use(Router)
Vue.use(VueI18n)

const store = createStore()
const router = createRouter()
sync(store, router)
{{/router}}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

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