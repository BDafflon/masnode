var Vector2D = require('../../utils/geometry/Vector2D.js');
var method = Body.prototype;


// Constructeur
function Body(mass, speed, acceleration, rotation, location, type) {
    this._mass = mass;
    this._MaxSpeed = speed;
    this._MaxAcceleration = acceleration;
    this._location = location
    
    this._PerceptionType = type;

    this._orientation = 0.;
    this._linearMove = new Vector2D;
    this.__currentAngularSpeed = 0.;
    this._maxAngularSpeed=1;

    console.log("Body "+this._PerceptionType)
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

method.scaleVector = function(vector, length, tic) {
        var v2 = new Vector2D;
        v2.copy(vector);


        if (v2.length()>0) v2.normalize();

        v2.scale(tic); //TODO checl  -> v2.scale(clock.perTimeUnit(length));

        return v2;
    }

method.computeSteeringMove = function(influence, tic){
        var m = new Vector2D;
        
        m.copy(this._linearMove);
        m.add(influence.getLinear());
        
        var lSpeed = m.length();

        if (lSpeed<0) lSpeed = 0.;
        if (lSpeed>this._maxLinearSpeed) lSpeed = this._maxLinearSpeed;

        return this.scaleVector(m, lSpeed, tic);
}

method.computeSteeringRotation = function(influence, tic){

        var speed = this._currentAngularSpeed + (influence.getAngular()/(tic/1000)) ; //TODO ->clock.perTimeUnit(angularAcceleration);
        if (speed<-this._maxAngularSpeed) speed = -this._maxAngularSpeed;
        else if (speed>this._maxAngularSpeed) speed = this._maxAngularSpeed;

        return speed; //T0D0 -> clock.perTimeUnit(speed);
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
            this._linearMove.set(0,0);
        }
        this._location.setX(this._location.getX()+vector.getX());
        this._location.setY(this._location.getY()+vector.getY());
}

method.rotate = function(angle, tic){
    this.orientation += angle;
}
module.exports = Body;