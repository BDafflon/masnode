
var Agent = require("./Agent.js");
var AnimatInfluence = require('../environment/AnimatInfluence.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');
var ArrayList = require('Arraylist');

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

var PreyAgent = function(body, radius){
    PreyAgent.super_.call(this,body,radius); // call A's constructor
     
};

 
function preyAgent(body, radius){
	Agent.call(this, body, radius);
	//if(body==null)
	//	this.createDefaultBody();
}
 
inherits(PreyAgent,Agent); // B now inherits/extends A

PreyAgent.prototype.createDefaultBody= function(){
};

PreyAgent.prototype.doDecisionAndAction = function() { // override A's method
    
    //console.log('prey');

    var predators = new ArrayList();
    var perception = this.__perciveObject;

    for( var i=0; i<perception.length;i++){
      if(perception.get(i).getType()=="predator"){
        predator.add(perception.get(i).getLocation());
      }
    }



    var x =10* (Math.random() -0.5);
    var y = 10* (Math.random() -0.5);

    

    var inf = new AnimatInfluence(new Vector2D(x,y), 0, this._body);
    return inf;
};

PreyAgent.prototype.separation = function(predators){
    Vector2D p = new Vector2D;
    p.set(0,0);

    Vector2D tmp = new Vector2D;
    tmp.set(0,0);

     for( var i=0; i<predators.length;i++){
        tmp.set(this._body.getLocation().getX()-predators.getX(), this._body.getLocation().getY()-predators.getY());
     

     if(tmp.lengthSquared()==0){

     }
     else{

     }
     p.add(tmp);
   }
  return p;   
}

module.exports = PreyAgent;