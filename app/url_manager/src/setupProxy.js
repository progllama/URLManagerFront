const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use(
    //     '/',
    //     createProxyMiddleware({
    //     // # /cards/と打つとhttp://http://back2:3838/cards/になる
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     secure: false
    //     })
    // );
  }