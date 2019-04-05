var http = require('http');

const port=process.env.PORT || 3000

console.log("Starting server on port ",port);
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port);