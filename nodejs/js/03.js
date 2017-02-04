var http=require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{'content-Type':"text/plain"});
    res.end("hello yunlulu,hahhahaha");
}).listen(8081,"127.0.0.1");
console.log("server running at http://127.0.0.1:8081");
