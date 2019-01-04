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
router.beforeEach((to, from, next) => {
  // 模拟登陆状态
  // let isLogin = this.$store.state.islogin
  let isLogin = false
  if (!isLogin) {
    if (to.path !== '/login') {
      alert('要先登录哦~🤣')
      return next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      return next({
        path: '/'
      })
    }
    next()
  }
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
