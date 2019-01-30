import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '@/pages/index/indexPage'
import login from '@/pages/index/login'
import homePage from '@/pages/home/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage,
      meta: {
        isLogin: false
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: login,
          meta: {
            isLogin: false,
            title: '登录'
          }
        }
      ]
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {
        isLogin: false,
        title: '首页'
      }
    }
  ]
})
