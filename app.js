var http = require('http');
var express = require("express");
var MongoClient = require('mongodb').MongoClient;

const PORT=process.env.PORT || 3000
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";
var TODO_COLLECTION = "todos";

var app = express();
app.use(bodyParser.json());

var db;

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database.db();
  var server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/todos", function(req, res) {
  db.collection(TODO_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/", function(req, res) {
  res.status(200).json({name:'sample todo app'});
});



