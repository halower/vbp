{{#if_eq build "standalone"}}
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import mixins from '@/mixins'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from '@/config/routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import { apistore } from '@/config/api/api.store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import directive from '@/directives'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as filters from '@/filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { createStore } from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import eventbus from '@/store/eventbus'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueI18n from 'vue-i18n'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuesocket}}
import VueSocketio from 'vue-socket.io'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuesocket}}
import messages from '@/config/i18n'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ProgressBar from '@/components/ProgressBar.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})

Vue.use(directive){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
Vue.use(VueI18n){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.mixin(mixins){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = createStore(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#vuesocket}}
Vue.use(VueSocketio, '{{socketio}}', store){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuesocket}}
const i18n = new VueI18n({
  locale: 'zh',
  messages
})

const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.body.appendChild(bar.$el){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.prototype.$api = apistore{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.prototype.$eventbus = eventbus{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.devtools = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.debug = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
