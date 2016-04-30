
var Body = require('./environment/Body.js');
var WorldModel = require('./environment/WorldModel.js');
var Agent = require('./agent/Agent.js');
var Prey = require('./agent/PreyAgent.js');
var Predator = require('./agent/predatorAgent.js');
var Scheduler = require('./scheduler/Scheduler.js');
var typeOf = require('typeof');
var Vector2D = require('../utils/geometry/Vector2D.js');

var SimulationTimeManager = require('./scheduler/SimulationTimeManager.js');

var method = Simulation.prototype;

function Simulation() {

	this._worldModel = new WorldModel(800,800);
	var tic = new SimulationTimeManager(100);
	this._scheduler = new Scheduler(this._worldModel,tic);

	for(var i=0 ; i<10;i++){


		var b = new Body(1, 10, 1, 1, new Vector2D(250,250), "prey");
		var a = new Prey(b,10);
		  
		this._worldModel.onAgentAdded(a);

 
	} 

	for(var i=0 ; i<10;i++){


		var b = new Body(1, 10, 1, 1, new Vector2D(Math.random() * (500 - 1) + 1,Math.random() * (500 - 1) + 1), "predator");
		var a = new Predator(b,10);
		  
		this._worldModel.onAgentAdded(a);

 
	} 

	this._scheduler.start();
 

}

method.getStat = function(){
	return this._worldModel.getStat();
}



module.exports = Simulation;