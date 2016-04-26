
var WorldModel = require('./environment/WorldModel.js');
var Prey = require('./agent/PreyAgent.js');
var Scheduler = require('./scheduler/Scheduler.js');
var typeOf = require('typeof');

var SimulationTimeManager = require('./scheduler/SimulationTimeManager.js');


var method = Simulation.prototype;

function Simulation() {

	this._worldModel = new WorldModel(500,500);
	var tic = new SimulationTimeManager(100);
	this._scheduler = new Scheduler(this._worldModel,tic);

	for(var i=0 ; i<10;i++){

		var prey1 = new Prey(null,10);
		
		this._worldModel.onAgentAdded(prey1);
	} 

	this._scheduler.start();


}
module.exports = Simulation;