var method = CircularFustrum.prototype;


function CircularFustrum(bodyLocation, radius) {
    this._bodyLocation = bodyLocation;
    this._radiusFustrum = radius;
}



method.setBodyLocation = function(bodyLocation) {
     this._bodyLocation = bodyLocation;
};

method.setRadius(radius){
	this._radiusFustrum = radius;
};


method.getRaduis = function() {
    return this._radiusFustrum;
};

method.getBodyLocation = function() {
    return this._bodyLocation;
};

method.isPointInside = function(target){

	var dist = Math.sqrt(  ((this._bodyLocation.getX() - target.getX()) * (this._bodyLocation.getX() - target.getX())) +
	 						((this._bodyLocation.getY() - target.getY()) * (this._bodyLocation.getY() - target.getY())));

		if (dist <= this._radiusFustrum)
			return true;
		return false;
		
		
};


module.exports = CircularFustrum;