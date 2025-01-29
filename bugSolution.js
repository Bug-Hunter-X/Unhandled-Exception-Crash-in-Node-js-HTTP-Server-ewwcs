const http = require('http');

const requestListener = function (req, res) {
  try {
    // Your request handling logic here
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Request error:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');