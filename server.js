"use strict";

var http = require('http');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({'extended':'true'}));

app.use(session({
    secret: "Özel-Anahtar",
    resave: false,
    saveUninitialized: true
  })); // girilecek değer sizin tercihinize bırakılmış..
 

app.get("/logout",function(req,res){
    req.session.destroy();
    res.redirect("/login");
    res.end();
   
})

app.get("/login",function(req,res){


    if(req.session.adiSoyadi){

        res.send("Daha önce giriş yapıldı." + '<a href="/logout">çıkış</a>');
    }
    else{

        res.sendFile(__dirname + "/post.html");
    }
     
});

app.post("/login",function(req,res){

    var user = "admin";
    var pass = "admin";
    var username = req.body.username;
    var password = req.body.password;

    if(user == username && pass == password){
        req.session.adiSoyadi = username;  
        res.send("giriş başarılı");
    }
    else{
        res.send("parola hatalı");
    }
    res.send(req.body.username + " girilen kullanıcı ismi..");
});

app.listen(8000);