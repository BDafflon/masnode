
var express = require('express'),
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');

var ArrayList = require('Arraylist');
var Vector2D = require('../../utils/geometry/Vector2D.js');

 
var method = dataReaderForRemoteAgent.prototype;


function dataReaderForRemoteAgent() {
	this._server = http.createServer(app);
	this._io = socketIo.listen(this._server);
	this._server.listen(8081);
	//{id=id, influence:{}}
	this._remoteAgent = {};
	
}

method.createRemote = function(){
	
	var self = this;

	this._io.on('connection', function (socket) {
		
		console.log("connextion ");

		 

		socket.on('setInfluence2D', function(data){
			//console.log("setDecision "+data.influence.x);
			self._remoteAgent[data.id] = data.influence;
		});
		

	});	

}

method.getIndluence = function(id){
	var inf = new Vector2D;
	inf.set(this._remoteAgent[id].x,this._remoteAgent[id].y);
	//console.log("getIndluence " +this._remoteAgent[id].x);
	return inf;

}

method.setPerception= function(id, perception){

	var p=[];

	for(var i=0; i<perception.length; i++){
		p.push({x:perception[i].getLocation().getX(), y:perception[i].getLocation().getY(), t:perception[i].getType()});
	}

	this._io.emit('setPerception', {id:id, perception:p});
}

method.addListener = function(id){
	
	// {2:{x:0,y:0},3:{x:3,y:4}}
	 
	this._remoteAgent[id]={x:0,y:0};
	console.log("preparation addListener network "+id);

}


module.exports = dataReaderForRemoteAgent;


