
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

var PreyAgent = function(body, radius){
    PreyAgent.super_.call(this); // call A's constructor
     
};



inherits(PreyAgent,Agent); // B now inherits/extends A

PreyAgent.prototype.createDefaultBody= function(){

};

PreyAgent.prototype.doDecisionAndAction = function() { // override A's method
    
    console.log('prey');
};

PreyAgent.prototype.uniqueB = function() {
    console.log('B.uniqueB',this.name);
};


module.exports = PreyAgent;