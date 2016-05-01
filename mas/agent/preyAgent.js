
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

var PreyAgent = function(body, radius){
    PreyAgent.super_.call(this,body,radius); // call A's constructor
    this._maxforce=10;
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

    var predators = new ArrayList;
    var perception = this._perciveObject;

    for( var i=0; i<perception.length;i++){
      if(perception.get(i).getType()=="predator"){
        predators.add(perception.get(i).getLocation());
      }
    }




    var force = this.separation(predators);

    force.set(10,10);
    force.normalize2D();
    
    console.log(typeOf(force));
    console.log("tmp 4 "+force.getX()+ " " +force.getY())

    if(force.length>this._maxforce){
      force.normalize2D();
      force.scale(-this._maxforce);
    }

    console.log("tmp 5 "+force.getX()+ " " +force.getY())

   // var inf = new AnimatInfluence(force, 0, this._body);
    return new AnimatInfluence(new Vector2D(0,0), 0, this._body);
  };

  PreyAgent.prototype.separation = function(predators){

    var p = new Vector2D;
    p.set(0,0);

    var tmp = new Vector2D;
    tmp.set(0,0);

    for( var i=0; i<predators.length;i++){
      
      tmp.set(this._body.getLocation().getX()-predators.get(i).getX(), this._body.getLocation().getY()-predators.get(i).getY());


      if(tmp.lengthSquared()==0){
        tmp.set(Math.random() -0.5,10* (Math.random() -0.5));
          //tmp.normalize2D();
        }
        else{
          tmp.scale(1/tmp.lengthSquared());
        }
        

        p.add(tmp);
      }

      console.log("tmp 3 "+p.getX()+ " " +p.getY());
      return p;   
    }

    module.exports = PreyAgent;