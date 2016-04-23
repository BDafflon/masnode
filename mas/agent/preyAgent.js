
var Agent = require("./Agent.js");
var AnimatInfluence = require('../environment/AnimatInfluence.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');

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
    var x =10* (Math.random() -0.5);
    var y = 10* (Math.random() -0.5);

    

    var inf = new AnimatInfluence(new Vector2D(x,y), 0, this._body);
    return inf;
};


module.exports = PreyAgent;