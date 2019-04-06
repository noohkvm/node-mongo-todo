var http = require('http');

const port=process.env.PORT || 3000


var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  dbo.collection("todos").insertOne({name:"Sample"}, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  //db.close();
});

console.log("Starting server on port ",port);

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port);




