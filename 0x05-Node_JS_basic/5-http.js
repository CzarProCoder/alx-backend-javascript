const http = require('http');
const countStudents = require('./3-read_file_async');

const dbPath = process.argv[2];
const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(dbPath)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(port, hostname);

module.exports = app;
