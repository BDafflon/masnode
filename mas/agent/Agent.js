var randomstring = require("randomstring");
var ArrayList = require('Arraylist');
var Body = require('../environment/Body.js');


var Agent = function(body, radius) {
    
     this._body = body;
     this._radiusFustrum = radius;
     this._id=randomstring.generate(20);
     this._perciveObject = ArrayList;
};

Agent.prototype.createDefaultBody= function(){

};

Agent.prototype.getName = function(){
	return this._id;
}
Agent.prototype.setPerciveObject = function(perciveObject) {
   	this._perciveObject = perciveObject;
};



Agent.prototype.getRadius = function() {
	return this._radiusFustrum;
};

Agent.prototype.setRadius= function(radius){
    this._radiusFustrum = radius;
};


 
Agent.prototype.setBody = function(body) {
     this._body = body;
};

Agent.prototype.getBody= function(){
    return this._body;
};


Agent.prototype.start= function(){

};

Agent.prototype.doDecisionAndAction = function() {
    console.log('agent');

};

module.exports = Agent;