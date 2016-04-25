
var method = Agent.prototype;


function Agent(body, radius) {
    this._body = body;
    this._radiusFustrum = radius;
    this.id = randomstring.generate(20);
    thiz._perciveObject = ArrayList;
}

method.setPerciveObject = function(perciveObject) {
   	this._perciveObject = perciveObject;
};

method.getBody = function() {
    return this._body;
};

method.getRadius(){
	return this._radiusFustrum;
};

method.createDefaultBody(){

};

method.setBody = function(body) {
     this._body = body;
};

method.setRadius(radius){
	this._radiusFustrum = radius;
};

method.start(){

}

method.doDecisionAndAction(){

};

module.exports = Agent;