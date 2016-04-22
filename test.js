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

var A = function() {
    this.x = 10;
    this.name = 'alpha';
    console.log('A.constructor');
};

A.prototype.method = function() {
    console.log('A.method',this.x);
};

A.prototype.uniqueA = function() {
    console.log('A.uniqueA',this.name);
};

var B = function() {
    B.super_.call(this); // call A's constructor
    this.x = 20;
    this.name = 'bravo';
    console.log('B.constructor');
};

inherits(B,A); // B now inherits/extends A

B.prototype.method = function() { // override A's method
    B.super_.prototype.method.call(this); // call A's `method` using B as the scope
    console.log('B.method',this.x);
};

B.prototype.uniqueB = function() {
    console.log('B.uniqueB',this.name);
};

var C = function() {
    C.super_.call(this); // call B's constructor
    this.x = 30;
    this.name = 'charlie';
    console.log('C.constructor');
};

inherits(C,B); // C now inherits/extends B (and thus A)

C.prototype.method = function() { // override B's method
    C.super_.prototype.method.call(this); // call B's `method` using C as the scope
    console.log('C.method',this.x);
}

C.prototype.uniqueC = function() {
    console.log('C.uniqueC',this.name);
};

console.log('start...');
var a = new A();
var b = new B();
var c = new C();
a.method();
a.uniqueA();
b.method();
b.uniqueB();
b.uniqueA();
c.method();
c.uniqueC();
c.uniqueB();
c.uniqueA();