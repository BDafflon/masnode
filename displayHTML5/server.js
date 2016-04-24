var express = require('express'), 
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');

// start webserver on port 8080
var server =  http.createServer(app);
var io = socketIo.listen(server);
server.listen(8080);
// add directory with our static files
app.use(express.static(__dirname + '/public'));
console.log("Server running on 127.0.0.1:8080");

// array of all lines drawn
var line_history = [];




// event-handler for new incoming connections
io.on('connection', function (socket) {

  setInterval(function(){
  data = {id:1,x:Math.random() * (200 - 1) + 1, y:Math.random() * (200 - 1) + 1 };
 
 	io.emit('draw_circle', {agent: data});

 	 data = {id:2,x:Math.random() * (200 - 1) + 1, y:Math.random() * (200 - 1) + 1 };
 
 	io.emit('draw_circle', {agent: data});
 	console.log('draw_circle');
 	
}, 500);

   
   
});