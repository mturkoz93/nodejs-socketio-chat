var http = require('http');
var express = require('express');

var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({'extended':'true'}));

app.get("/login",function(req,res){
    res.sendFile(__dirname+"/post.html");
});

app.post("/login",function(req,res){
    res.send(req.body["username"]+" girilen kullanıcı ismi..");
});

app.listen(8080);