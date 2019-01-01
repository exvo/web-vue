import Vue from 'vue'
import Router from 'vue-router'

const indexPage = (resolve) => {
  import('@/pages/index/indexPage').then((module) => {
    resolve(module)
  })
}

const login = (resolve) => {
  import('@/pages/index/login').then((module) => {
    resolve(module)
  })
}

const homePage = (resolve) => {
  import('@/pages/home/homePage').then((module) => {
    resolve(module)
  })
}

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
