var Agent = require("./Agent.js");
var AnimatInfluence = require('../environment/AnimatInfluence.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');
var ArrayList = require('Arraylist');
var typeOf = require('typeof');



var inherits = function(ctor, superCtor) { // took this right from requrie('util').inherits
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

var RemoteAgent = function(body, radius, remote) {
    RemoteAgent.super_.call(this, body, radius); // call A's constructor
    this._maxforce = 10;
    this._remote = remote;
    this.createRemote();
    this._remoteInfluence = new Vector2D;
    this._remoteInfluence.set(0, 0);
};


function RemoteAgent(body, radius) {
    Agent.call(this, body, radius);
    //if(body==null)
    //  this.createDefaultBody();
}

inherits(RemoteAgent, Agent); // B now inherits/extends A

RemoteAgent.prototype.createDefaultBody = function() {};

RemoteAgent.prototype.createRemote = function() {

  

    
};

RemoteAgent.prototype.doDecisionAndAction = function() { // override A's method
    
  var i = new Vector2D;
  if(this._remote != undefined){

    this._remote.setPerception(this.getName(), this._perciveObject);

    var a = this._remote.getIndluence(this.getName());

     i.set(a.getX(), a.getY());
     

  }
  else{
    console.log("undefined remote");
  }

   
   



    var inf = new AnimatInfluence(new Vector2D(i.getX(), i.getY()), 0, this._body);
   // console.log("influence "+i.getX()+" "+ i.getY());
    
    return inf; //new AnimatInfluence(new Vector2D(0,0), 0, this._body);
};



module.exports = RemoteAgent;