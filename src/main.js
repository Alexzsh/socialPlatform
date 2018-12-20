// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routers from './router/routers'
import utils from './utils'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
import './assets/icon/iconfont'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: routers
})

Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  utils,
  store,
  render: h => h(App)
})
