var http = require('http');

var server = http.createServer(

    function(req,res){
        res.writeHead(200,{'content-type':'text/html; charset=utf-8'});
        res.write("welcome to türkiye");
        res.end();
    }
);

server.listen(3000);
console.log("running..");