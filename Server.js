var express = require('express'), 
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');

var SimulationSMA = require('./mas/simulation.js');
// start webserver on port 8080
var server =  http.createServer(app);
var io = socketIo.listen(server);
server.listen(8080);
// add directory with our static files
app.use(express.static(__dirname + '/public'));
console.log("Server running on 127.0.0.1:8080");

console.log("----------- start simulation--------------");
var simu = new SimulationSMA();


// event-handler for new incoming connections
io.on('connection', function (socket) {




  setInterval(function(){
   
   var data = simu.getStat();
   
   

   for(var i = 0 ; i < data.length; i++){

   		 
   		var d = {id:data.get(i).getId(), x:data.get(i).getLocation().getX(), y:data.get(i).getLocation().getY(), type:data.get(i).getType()}
   		
   		io.emit('draw_agent', {agent: d});
 		
   }
   
 
 	
}, 100);

   
   
});
