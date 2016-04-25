

var method = Scheduler.prototype;


function Scheduler(worldModel) {
	this._worldModel = worldModel;
}

method.start = function(){

}

method.stop = function(){

}

method.run = function(){
	agents = this._worldModel.getAgents();
	for(var a in agents){
		a.setPerciveObject(this._worldModel.perceive(a));
		this._worldModel.getInfluences().add(a.doDecisionAndAction());
	}

	this._worldModel.applyInfluences();
}

module.exports = Scheduler;