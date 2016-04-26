
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

		
		 


		console.log(typeOf(agents.get(i)));
		var prey = new PreyAgent(agents.get(i));
		console.log(typeOf(prey));

		//agents.get(i).setPerciveObject(this._worldModel.perceive(agents.get(i)));

		var influence = prey.doDecisionAndAction();

		console.log("influence");
		console.log(influence);
		this._worldModel.getInfluences().add(influence);
	}

	this._worldModel.applyInfluences(this._simulationTime.getTic);
}

module.exports = Scheduler;