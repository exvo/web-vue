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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
