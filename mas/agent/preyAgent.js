var Agent = require("./Agent.js");


function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype)
    copyOfParent.constructor = childObject
    childObject.prototype = copyOfParent
}


var method = preyAgent.prototype;

function preyAgent(body, radius){
	Agent.call(this, body, radius);
	//if(body==null)
	//	this.createDefaultBody();
}


method.createDefaultBody= function(){

};

method.getBody = function() {
    return this._body;
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
};



inheritPrototype(preyAgent, Agent);

module.exports = preyAgent;