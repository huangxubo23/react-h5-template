const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(process.env.APP_BASE_API, {
      target: process.env.APP_BASE_HOST,
      changeOrigin: true,
      // ws: true,
      // pathRewrite: {
      //   '^/api': ''
      // },
    })
  );
};