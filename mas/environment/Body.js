var Vector2D = require('../../utils/geometry/Vector2D.js');
var method = Body.prototype;


// Constructeur
function Body(mass, speed, acceleration, location, type) {
    this._mass = mass;
    this._MaxSpeed = speed;
    this._MaxAcceleration = acceleration;
    this._location = location
    
    this._PerceptionType = type;
    this._linearMove = new Vector2D;
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


method.computeSteeringMove = function(influence, tic){

}

method.computeSteeringRotation = function(influence, tic){

}

method.move = function(vector, tic){
    if (tic>0) {
            this._linearMove.set(vector.getX(), vector.getY());
            var distance = this.linearMove.length();

            if (distance>0) {
                this._linearMove.normalize();
                this._linearMove.scale(distance/tic);
            }
        }
        else {
            this.linearMove.set(0,0);
        }
        this._location.setX(this._location.getX()+vector.getX());
        this._location.setY(this._location.getY()+vector.getY());
}

method.rotate = function(angle, tic){

}
module.exports = Body;