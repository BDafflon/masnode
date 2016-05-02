var Agent = require("./Agent.js");
var AnimatInfluence = require('../environment/AnimatInfluence.js');
var Vector2D = require('../../utils/geometry/Vector2D.js');
var ArrayList = require('Arraylist');
var typeOf = require('typeof');
var express = require('express'),
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');


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

var RemoteAgent = function(body, radius, io) {
    RemoteAgent.super_.call(this, body, radius); // call A's constructor
    this._maxforce = 10;
    this._server = http.createServer(app);
    this._io = require('socket.io').listen(this._server);
    this._server.listen(8081);
    this.createRemote(this._io);
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

RemoteAgent.prototype.createRemote = function(io) {


    
};

RemoteAgent.prototype.doDecisionAndAction = function() { // override A's method


  //Connexion serveur
  


    var i = new Vector2D;
    i.set(this._remoteInfluence.getX(), this._remoteInfluence.getY());



    var inf = new AnimatInfluence(new Vector2D(i.getX(), i.getY()), 0, this._body);
    this._remoteInfluence.set(0, 0);
    return inf; //new AnimatInfluence(new Vector2D(0,0), 0, this._body);
};



module.exports = RemoteAgent;