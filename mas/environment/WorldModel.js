
var method = WorldModel.prototype;

function WorldModel(width,height) {
    this._width = width;
    this._height = height;
    
    this._agents = new ArrayList;
    this._objects = new ArrayList;
    
    this._influences = new Arraylist;
    
}

method.onAgentBodyAdded = function(body){

};

method.onAgentBodyRemoved = function(body){

};

method.onObjectAdded = function(body){

};

method.onObjectRemoved = function(body){

};

method.perceive= function(agentId){

};

method.applyInfluences(){

}


 
module.exports = WorldModel;