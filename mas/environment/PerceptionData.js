
var method = PerceptionData.prototype;


function PerceptionData(location, type, id) {
	this._location = location;
	this._type = type;
	this._id=id;
}

method.getId = function(){
	return this._id;
}
method.getType=function(){
	return this._type;
}

method.getLocation = function(){
	return this._location;
}

module.exports = PerceptionData;