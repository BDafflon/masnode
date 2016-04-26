
var method = Vector2D.prototype;

function Vector2D(x,y) {
    this._x = x;
    this._y = y;
}

method.getX = function() {
    return this._x;
};

method.getY = function() {
    return this._y;
};

method.setX = function(x) {
     this._x = x;
};

method.setY = function(y) {
     this._y = y;
};

method.set = function(x,y){
	this._x=x;
	this._y=y;
}

method.length = function(){
	return Math.sqrt((this._x*this._x)+(this._y*this._y));
}

method.normalize = function(){
	var length = this.length();

	if (length == 0) {
		this._x = 1;
		this._y = 0;
	} else {
		this.divide(Vector2D(length, length));
	}
	return this;
}


method.divide = function(){
	this._x /= vector._x;
	this._y /= vector._y;
	return this;
}


module.exports = Vector2D;