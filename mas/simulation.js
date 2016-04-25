
var WorldModel = require('./environment/WorldModel.js');
var Prey = require('./agent/preyAgent.js');
var Scheduler = require('./scheduler/scheduler.js');

var method = Simulation.prototype;

function Simulation() {

	this._worldModel = new WorldModel(500,500);
	this._scheduler = new Scheduler(_worldModel);

	for(int i=0 ; i<10;i++){

		prey1 = new Prey(null,10);
		this._worldModel.onAgentAdded(prey1);
	} 

	this._scheduler.start():


}
module.exports = Simulation;