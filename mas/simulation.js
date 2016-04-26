
var Body = require('./environment/Body.js');
var WorldModel = require('./environment/WorldModel.js');
var Prey = require('./agent/PreyAgent.js');
var Scheduler = require('./scheduler/Scheduler.js');
var typeOf = require('typeof');
var Vector2D = require('../utils/geometry/Vector2D.js');

var SimulationTimeManager = require('./scheduler/SimulationTimeManager.js');


var method = Simulation.prototype;

function Simulation() {

	this._worldModel = new WorldModel(500,500);
	var tic = new SimulationTimeManager(100);
	this._scheduler = new Scheduler(this._worldModel,tic);

	for(var i=0 ; i<10;i++){

		var body = Body(1,10,0.1, 1 , new Vector2D(0,0),"prey");

		var prey1 = new Prey(body,10);

		
		
		this._worldModel.onAgentAdded(prey1);
	} 

	this._scheduler.start();


}
module.exports = Simulation;