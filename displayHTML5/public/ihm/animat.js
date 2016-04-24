var method = Animat.prototype;


function Animat(context,window) {
	this.x =  0;
	this.y = 15;
	this.speed = 5;
	this.context=context;
	this.window=window;
}


method.animate = function() {

    reqAnimFrame = window.mozRequestAnimationFrame    ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame     ||
                window.oRequestAnimationFrame
                ;

    reqAnimFrame(animate);

    this.x += this.speed;

    if(this.x <= 0 || this.x >= 475){
        this.speed = -this.speed;
    }

    this.draw();
}


method.draw=function() {
     
    this.context.clearRect(0, 0, 500, 170);
    this.context.fillStyle = "#ff00ff";
    this.context.fillRect(x, y, 25, 25);
}

module.exports = Animat;