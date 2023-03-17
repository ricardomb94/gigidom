import createProxyMiddleware from 'http-proxy-middleware';
import proxy from 'http-proxy-middleware';
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/', // replace with your endpoint
        { target: 'httpt://127.0.0.1:5000/' } // replace with your target
    ));
}