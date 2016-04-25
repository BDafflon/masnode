
var method = WorldModel.prototype;

function WorldModel(width,height) {
    this._width = width;
    this._height = height;
    
    this._agents = new ArrayList;
    this._objects = new ArrayList;
    
    this._influences = new Arraylist;
    
}

method.getInfluences = function(){
	return this._influences;
}
method.getAgent = function(){
	return this._agents;
}

method.onAgentAdded = function(agent){
	this._agents.add(agent)
};

method.onAgentRemoved = function(agent){

};

method.onObjectAdded = function(object){

};

method.onObjectRemoved = function(object){

};

method.perceive= function(agent){

};


method.applyInfluences= function(){

}


 
module.exports = WorldModel;