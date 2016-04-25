
var method = Vector2D.prototype;

function Vector2D(x,y) {
    this._x = x;
    this._y = y;
}

method.getX = function() {
    return this._x;
};

method.getY = function() {
    return this._y;
};

method.setX = function(x) {
     this._x = x;
};

method.setY = function(y) {
     this._y = y;
};

module.exports = Vector2D;