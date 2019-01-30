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

var msg = {}

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

  for (let i in msg) {
    setTimeout(msg[i], 0)
  }
  if (checkUserIsLogin()) {
    // 有路由的直接通过
    if (to.meta.isLogin) {
      next()
    } else {
      // 没有路由的全部跳到首页
      next({path: '/homePage'})
    }
  } else {
    if (to.path === '/login' || to.path === '/passwordReset' || to.path === '/register') {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
})

function checkUserIsLogin () {
  var data = JSON.parse(localStorage.getItem('token'))
  return data
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
}).$mount('#app')
