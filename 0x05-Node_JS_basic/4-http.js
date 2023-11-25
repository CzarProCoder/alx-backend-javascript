const http = require('http');

const app = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    req.end('Hello Holberton School!');
  })
  .listen(1245);

module.exports = app;
