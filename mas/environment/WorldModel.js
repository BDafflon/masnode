
var ArrayList = require('Arraylist');
var PerceptionData = require('PerceptionData.js');

var method = WorldModel.prototype;

function WorldModel(width,height) {
	this._width = width;
	this._height = height;

	this._agents = new ArrayList;
	this._objects = new ArrayList;

	this._influences = new ArrayList;

}

method.getInfluences = function(){
	return this._influences;
}
method.getAgents = function(){
	return this._agents;
}

method.onAgentAdded = function(agent){

	this._agents.add(agent)
};

method.onAgentRemoved = function(agent){

};

method.onObjectAdded = function(object){

};

method.onObjectRemoved = function(object){

};

method.perceive= function(agent){

	var currentAgent = agent;
	var perceptionList = new Arraylist;

	for (var j = 0; j < this._agents.length; j++) {
		if(i!=j){
			var currentLocation = this._agents.get(i).getBody().getLocation();

			var location = this._agents.get(j).getBody().getLocation();
			var type = this._agents.get(j).getBody().getType();

			var distance = Math.sqrt(  (location.getX() - currentLocation.getX())*(location.getX() - currentLocation.getX()) +
				(location.getY() - currentLocation.getY())*(location.getY() - currentLocation.getY())

				);

			if(distance<currentAgent.getRadius()){
				var perception = new PerceptionData(location, type);
				perceptionList.add(perception);
			}
			
		}
	}
	return perceptionList;
};


method.applyInfluences= function(){

}



module.exports = WorldModel;