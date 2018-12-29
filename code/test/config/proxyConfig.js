module.exports = {
  proxy: {
        '/api': {    //将www.exaple.com印射为/apis\
		  target:'http://127.0.0.1:8899/api',
          changeOrigin: true,  //是否跨域
          pathRewrite: {
              '^/api': ''   //需要rewrite的,
          }
      },

  }
}
