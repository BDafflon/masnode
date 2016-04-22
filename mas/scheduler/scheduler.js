
var typeOf = require('typeof');
var ArrayList = require('Arraylist');
var AnimatInfluence = require('../environment/AnimatInfluence.js');
var PreyAgent = require('../agent/PreyAgent.js');

var method = Scheduler.prototype;


function Scheduler(worldModel, simulationTime) {
	this._worldModel = worldModel;
	this._simulationTime = simulationTime;
}

method.start = function(){
	var self = this;

	setInterval(function(){
		self.run();


	}, this._simulationTime.getTic);

}

method.stop = function(){

}

method.run = function(){

	var agents =  this._worldModel.getAgents();

	for(var i = 0 ; i <  agents.length; i++){

		 
		console.log(agents.get(i).getName());
		agents.get(i).doDecisionAndAction();
		//agents.get(i).setPerciveObject(this._worldModel.perceive(agents.get(i)));
		//this._worldModel.getInfluences().add(agents.get(i).doDecisionAndAction());
 
	}

	//this._worldModel.applyInfluences(this._simulationTime.getTic);
}

module.exports = Scheduler;