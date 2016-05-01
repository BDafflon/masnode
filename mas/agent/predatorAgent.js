
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

var PredatorAgent = function(body, radius) {
    PredatorAgent.super_.call(this, body, radius); // call A's constructor
     
};



inherits(PredatorAgent,Agent); // B now inherits/extends A

PredatorAgent.prototype.createDefaultBody= function(){

};

PredatorAgent.prototype.doDecisionAndAction = function() { // override A's method
    
    //console.log('predator');

      var x = 0;//20* (Math.random() -0.5);
    var y =0;// 20* (Math.random() -0.5);

    

    var inf = new AnimatInfluence(new Vector2D(x,y), 0, this._body);
    return inf;

};


module.exports = PredatorAgent;