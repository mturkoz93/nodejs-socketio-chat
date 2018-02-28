var http = require('http');

var server = http.createServer(

    function(req,res){
  
        res.write(req.url);
        res.end();
    }
);

server.listen(3000);
console.log("running..");