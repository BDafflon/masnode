
var ArrayList = require('Arraylist');
var PerceptionData = require('./PerceptionData.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');
var AnimatAction = require('./AnimatAction.js');

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


method.applyInfluences= function(tic){
	var influenceList = new Arraylist;
	var action = new Arraylist;

	influenceList.add(this._influences);

	for(var i=0 ;i<influenceList.length; i++){
		var currentInfluence = influenceList.get(i);
		var body = currentInfluence.getBody();

		if(body != null){
			var move = new Vector2D;
			var rotation = 0.;

			move = body.computeSteeringMove(currentInfluence, tic);
			rotation = body.computeSteeringRotation(currentInfluence, tic);

			var currentAction = new AnimatAction(body, move, rotation);
			action.add(currentAction);

		}
	}


	for(var i=0 ;i<action.length; i++){
		var body = action.get(i).getObjectToMove();
		if(body != null){
			body.move(action.get(i).getTranslation(), tic);
			body.rotate(action.get(i).getRotation(), tic);
		}

	}

	console.log("World updated");

}



module.exports = WorldModel;