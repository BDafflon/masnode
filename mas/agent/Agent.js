var randomstring = require("randomstring");
var ArrayList = require('Arraylist');
var Body = require('../environment/Body.js');

var method = Agent.prototype;


function Agent(body, radius) {
    this._body = body;
    this._radiusFustrum = radius;
    this._id = randomstring.generate(20);
    this._perciveObject = ArrayList;
}

method.getName = function(){
	return this._id;
}
method.setPerciveObject = function(perciveObject) {
   	this._perciveObject = perciveObject;
};

method.getBody = function() {
    return this._body;
};

method.getRadius= function(){
	return this._radiusFustrum;
};



method.setBody = function(body) {
     this._body = body;
};

method.setRadius= function(radius){
	this._radiusFustrum = radius;
};

method.start= function(){

}

method.doDecisionAndAction = function(){
console.log("agent");
};

module.exports = Agent;