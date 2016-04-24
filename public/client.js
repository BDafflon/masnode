
var agents= {};
var agents2={};

document.addEventListener("DOMContentLoaded", function() {
 
   // get canvas element and create context
   var canvas  = document.getElementById('drawing');
   var context = canvas.getContext('2d');
   var width   = window.innerWidth;
   var height  = window.innerHeight;
   var socket  = io.connect();
   var canvasWidth = 800;
   var canvasHeight = 800;
   
   // var agents= {1:{x:1,y:2,t:4}};
   

   var update =0;
   // set canvas to full browser width/height
   
   socket.on('draw_agent', function (data) {

    id = data.agent.id;

    x =data.agent.x ;
    y =data.agent.y ;
    console.log(x);
    type = data.agent.type;

    var d={x:x,y:y,t:type};
    if(agents[id] ==undefined){
      agents2[id]=d;
      agents[id]=d;

    }else{
      agents2[id]=agents[id];
      agents[id]=d;
    }
    update = 1;

  });

 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
                            
function init(){
  window.requestAnimationFrame(draw);
}

function draw() {
   context.clearRect(0, 0, canvasWidth, canvasHeight);
// color in the background
    context.fillStyle = "#EEEEEE";
    context.fillRect(0, 0, canvasWidth, canvasHeight);


  for(var agent  in agents){
  drawAgent(agents[agent]);
 }
  context.stroke();
  
  window.requestAnimationFrame(draw);
}

function drawAgent(agent){
     
    // draw the circle
    context.beginPath();
     
    var radius = 5;
    context.arc(agent['x'], agent['y'], radius, 0, Math.PI * 2, false);
    context.closePath();
     
    // color in the circle
    if(agent['t']=="prey")
      context.fillStyle = "#00CC00";
    if(agent['t']=="predator")
      context.fillStyle = "#CC0000";
    context.fill();
}

init();
});