var express = require("express");
var app = express();

app.get('/', function(req, res) {
  console.log("GET request for home page");
  res.send("Hello GET");
});

app.post("/", function(req, res){
  console.log("POST request for home page");
  res.send("Hello POST");
});

app.delete("/del_user", function(req, res){
  console.log("DELETE request for /del_user");
  res.send("Hello DELETE");
});

app.get("/list_user", function(req, res){
  console.log("GET request for /list_user");
  res.send("Page Listing");
});

app.get("/ab*cd", function(req, res) {
    console.log("GET request for /ab*cd");
    res.send("Page Pattern Match");
});

var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});