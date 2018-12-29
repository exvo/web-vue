var serverApi = {
  HOST: '/api',

  // 登录
  LOGIN: '/login'
}

observe(serverApi)

function observe (data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}
function defineReactive (data, key, val) {
  observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      if (key === 'HOST') {
        return val
      } else {
        return this.HOST + val
      }
    }
  })
}
export {
  serverApi
}
