// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 引入vue-resource http请求
import VueResource from 'vue-resource'

// 全局配置
Vue.use(iView, {
  transfer: true,
  size: 'large'
})
Vue.use(VueResource)

Vue.config.productionTip = false

// vue-resource 拦截器
Vue.http.interceptors.push((request, next) => {
  console.log(request.headers)
  next((response) => {
    console.log(response.status)
    return response
  })
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.path === '/login') {
    next()
    return
  }

  if (checkUserIsLogin()) {
    // 有路由的直接通过
    if (to.path === '/') {
      // 没有路由的全部跳到首页
      next({path: '/homePage'})
    } else {
      next()
    }
  } else {
    next({
      path: '/login'
    })
  }
})

function checkUserIsLogin () {
  return JSON.parse(localStorage.getItem('token'))
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
}).$mount('#app')
