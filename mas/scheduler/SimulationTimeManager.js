

var method = SimulationTime.prototype;


function SimulationTime(ticTime) {
	this._tic = ticTime;
}

method.getTic = function(){
	return this._tic;
}

module.exports = SimulationTime;