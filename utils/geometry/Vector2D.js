
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

method.copy = function(vector1){
	this._x=vector1.getX();
	this._y= vector1.getY();
}

method.length = function(){
	return Math.sqrt((this._x*this._x)+(this._y*this._y));
}

method.normalize2D = function(){
	var length = this.length();

	if (length == 0) {
		this._x = 1;
		this._y = 0;
	} else {
		this.divide(new Vector2D(length, length));
	}
	return this;
}


method.divide = function(vector){
	this._x /= vector.getX();
	this._y /= vector.getY();
	return this;
}

method.add = function(vector1){
	this._x+=vector1.getX();
	this._y+= vector1.getY();
}

method.scale= function(scalar){
	this._x=this._x*scalar;
	this._y=this._y*scalar;
}


module.exports = Vector2D;