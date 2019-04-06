var http = require('http');

const port=process.env.PORT || 3000


var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

console.log("Starting server on port ",port);

http.createServer(function (req, res) {
  res.write('Hello World!'+url); //write a response to the client
  res.end(); //end the response
}).listen(port);




