var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 5100;
var proxy = require('cors-anywhere');

proxy.createServer({
  originWhitelist: [], // Allow all origins /* requireHeader: ['origin', 'x-requested-with'], */
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});