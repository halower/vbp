import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.store'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
  })
}
