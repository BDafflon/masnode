
var method = PerceptionData.prototype;


function PerceptionData(location, type) {
	this._location = location;
	this._type = type;
}

method.getType=function(){
	return this._type;
}

method.getLocation = function(){
	return this._location;
}

module.exports = PerceptionData;