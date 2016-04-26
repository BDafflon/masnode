var Agent = require("./Agent.js");
var Vector2D = require('../../utils/geometry/Vector2D.js');
Var Body = require('../environment/Body.js');
var AnimatInfluence = require('../environment/AnimatInfluence.js');

function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype)
    copyOfParent.constructor = childObject
    childObject.prototype = copyOfParent
}


var method = preyAgent.prototype;

function preyAgent(body, radius){
	Agent.call(this, body, radius);
	if(body==null)
		this.createDefaultBody();
}


method.createDefaultBody= function(){
	this._body = new Body(1,10,0.1, 1 , new Vector2D(0,0,"Prey"));

};

method.setBody = function(body) {
     this._body = body;
};

method.setRadius= function(radius){
	this._radiusFustrum = radius;
};

method.start= function(){

}

method.doDecisionAndAction= function(){
	console.log("prey");
	

	var force = new Vector2D;
	force.set(1,1);
	
	var influence = new AnimatInfluence(force,0,this._body);

	return influence;
};



inheritPrototype(preyAgent, Agent);

module.exports = preyAgent;