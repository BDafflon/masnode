var http = require("http");
var Body = require("./body.js");
var Vector2D = require("./vector2D.js");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  var l = new Vector2D(10,10);
  var b = new Body(1,1,1,l);
  
  response.write("body "+b.getLocation().getX());
  response.end();
}).listen(8888);