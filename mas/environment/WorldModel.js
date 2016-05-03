

var ArrayList = require('arraylist');
var PerceptionData = require('./PerceptionData.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');
var AnimatAction = require('./AnimatAction.js');
var typeOf = require('typeof');


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
	var perceptionList = new ArrayList;

	for (var j = 0; j < this._agents.length; j++) {
		if(this._agents.get(j).getName()!=agent.getName()){

			var currentLocation = agent.getBody().getLocation();

			var location = this._agents.get(j).getBody().getLocation();
			var type = this._agents.get(j).getBody().getPerceptionType();


			var distance = Math.sqrt(  (location.getX() - currentLocation.getX())*(location.getX() - currentLocation.getX()) +
				(location.getY() - currentLocation.getY())*(location.getY() - currentLocation.getY())

				);

			if(distance<currentAgent.getRadius()){
				var perception = new PerceptionData(location, type,null);
				perceptionList.add(perception);
			}
			
		}
	}
	return perceptionList;
};


method.applyInfluences= function(tic){
	 
	var action = new ArrayList;

	 

	for(var i=0 ;i<this._influences.length; i++){
		var currentInfluence = this._influences.get(i);
		
		var body = currentInfluence.getBody();
 
		if(body != null){
			var move = new Vector2D;
			var rotation = 0.;

			 
			move = body.computeKinematicMove(currentInfluence, tic);
			rotation = body.computeKinematicRotation(currentInfluence, tic);
 			
			 

			var currentAction = new AnimatAction(body, move, rotation);
			action.add(currentAction);

		}
	}


	for(var i=0 ;i<action.length; i++){
		var body = action.get(i).getObjectToMove();

		if(body != null){
 
			body.move(action.get(i).getTranslation(), tic);
			body.rotate(action.get(i).getRotation(), tic);


			if(body.getLocation().getX()<0)
				body.getLocation().setX(0);
			if(body.getLocation().getX()>this._width)
				body.getLocation().setX(this._width);

			if(body.getLocation().getY()<0)
				body.getLocation().setY(0);
			if(body.getLocation().getY()>this._height)
				body.getLocation().setY(this._height);


		}

	}

	this._influences = new ArrayList;
	//console.log("World updated");

}

method.getStat= function(){
	var data = new ArrayList;

	for (var j = 0; j < this._agents.length; j++) {

		var location = this._agents.get(j).getBody().getLocation();

		var type = this._agents.get(j).getBody().getPerceptionType();

		var perception = new PerceptionData(location, type, this._agents.get(j).getName());
		data.add(perception);
	}

	return data;
}


module.exports = WorldModel;