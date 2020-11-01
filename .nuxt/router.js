import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3fe6531a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _977e6cee = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _4f7a5f2d = () => interopDefault(import('../pages/rooms/_id.vue' /* webpackChunkName: "pages/rooms/_id" */))
const _1665335c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _3fe6531a,
    name: "login"
  }, {
    path: "/register",
    component: _977e6cee,
    name: "register"
  }, {
    path: "/rooms/:id?",
    component: _4f7a5f2d,
    name: "rooms-id"
  }, {
    path: "/",
    component: _1665335c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
