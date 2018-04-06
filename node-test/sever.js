var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("hello node it's awesome");

}).listen(8000);
console.log("server ready it's runing");