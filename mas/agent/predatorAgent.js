var Agent = require("./Agent.js");


function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype)
    copyOfParent.constructor = childObject
    childObject.prototype = copyOfParent
}


var method = predatorAgent.prototype;

function predatorAgent(body, radius){
	Agent.call(this, body, radius);
	if(body==null)
		this.createDefaultBody();
}


method.createDefaultBody= function(){

};

method.setBody = function(body) {
     this._body = body;
};

method.setRadius= function(radius){
	this._radiusFustrum = radius;
};

method.start(){

}

method.doDecisionAndAction= function(){

	console.log("predator");

};



inheritPrototype(preyAgent, Agent);

module.exports = predatorAgent;