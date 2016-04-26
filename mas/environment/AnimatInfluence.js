

var method = AnimatInfluence.prototype;


function AnimatInfluence(linear, angular, body) {
	this._linear = linear;
	this._angular = angular;
	this._body = body
}

method.getLinear = function(){
	return this._linear;
}

method.getAngular = function(){
	return this._angular;
}

method.getBody=fuction(){
	return this._body;
}

module.exports = AnimatInfluence;