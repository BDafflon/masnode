
var Body = require('./environment/Body.js');
var WorldModel = require('./environment/WorldModel.js');
var Agent = require('./agent/Agent.js');
var Prey = require('./agent/PreyAgent.js');
var RemoteAgent = require('./agent/RemoteAgent.js');

var Predator = require('./agent/predatorAgent.js');
var Scheduler = require('./scheduler/Scheduler.js');
var typeOf = require('typeof');
var Vector2D = require('../utils/geometry/Vector2D.js');
var ArrayList = require('Arraylist');

var SimulationTimeManager = require('./scheduler/SimulationTimeManager.js');
var DataReader = require('./network/dataReaderForRemoteAgent.js');

var method = Simulation.prototype;

var RemoteAgentList = new ArrayList;


function Simulation() {


	

	this._worldModel = new WorldModel(800,800);
	var tic = new SimulationTimeManager(100);
	this._scheduler = new Scheduler(this._worldModel,tic);

	this._dataReader = new DataReader;



	// Remote Agennt

	this._dataReader.createRemote();

	for(var i=0 ; i<2;i++){

		
		var b = new Body(1, 1000000, 1, 1, new Vector2D(Math.random() * (200 - 1) + 1,Math.random() * (200 - 1) + 1), "RemoteAgent");
		var a = new RemoteAgent(b,100, this._dataReader);
		  
		this._worldModel.onAgentAdded(a);
		RemoteAgentList.add(a);
		this._dataReader.addListener(a.getName());
 
	} 





	// Predator


	for(var i=0 ; i<1;i++){


		var b = new Body(1, 10, 1, 1, new Vector2D(250,250), "predator");
		var a = new Predator(b,10);
		  
		this._worldModel.onAgentAdded(a);

 
	} 


	// Prey

	
	for(var i=0 ; i<1;i++){


		var b = new Body(1, 10, 1, 1, new Vector2D(250,250), "prey");
		var a = new Prey(b,10);
		  
		this._worldModel.onAgentAdded(a);

 
	} 

	 
   



	this._scheduler.start();
 

}

method.getStat = function(){
	return this._worldModel.getStat();
}



module.exports = Simulation;