
var Agent = require("./Agent.js");

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

var PredatorAgent = function() {
    PredatorAgent.super_.call(this); // call A's constructor
     
};



inherits(PredatorAgent,Agent); // B now inherits/extends A

PredatorAgent.prototype.createDefaultBody= function(){

};

PredatorAgent.prototype.doDecisionAndAction = function() { // override A's method
    
    console.log('predator');
};

PredatorAgent.prototype.uniqueB = function() {
    console.log('B.uniqueB',this.name);
};


module.exports = PredatorAgent;