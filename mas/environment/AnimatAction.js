

var method = AnimatAction.prototype;


function AnimatAction(body, move, rotation) {
	this._body = body;
	this._move = move;
	this._rotation = rotation;
}

method.getTranslation = function(){
	return this._move;
}

method.getRotation = function(){
	return this.rotation;
}

method.getObjectToMove = function(){
	return this._body;
}

module.exports = AnimatAction;