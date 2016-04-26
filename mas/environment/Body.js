
var method = Body.prototype;


// Constructeur
function Body(mass, speed, acceleration, location, type) {
    this._mass = mass;
    this._MaxSpeed = speed;
    this._MaxAcceleration = acceleration;
    this._location = location
    
    this._PerceptionType = type;
}


// GETTER

method.getPerceptionType = function(){
	return this._PerceptionType;
}

method.getLocation = function() {
    return this._location;
};

method.getMass = function() {
    return this._mass;
};

method.getMaxAcceleration = function() {
    return this._MaxAcceleration;
};

method.getMaxSpeed = function() {
    return this._MaxSpeed;
};

// SETTER
method.setLocation = function(location) {
    this._location = location
};

method.setMass = function(mass) {
   this._mass = mass;
};

method.setMaxAcceleration = function(acceleration) {
    this._MaxAcceleration = acceleration;
};

method.setMaxSpeed = function(speed) {
    this._MaxSpeed = speed;
};


module.exports = Body;