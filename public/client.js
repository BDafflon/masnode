
var agents= {};
var agents2={};
var perception={};
var perceptionUpdated=0;

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

document.addEventListener("DOMContentLoaded", function() {
  
  run();
  doDecision(null);
   // get canvas element and create context
   var canvas  = document.getElementById('drawing');
   var context = canvas.getContext('2d');
   var width   = window.innerWidth;
   var height  = window.innerHeight;
   var socket  = io.connect();
   
    var socket2 = io.connect('http://localhost:8081');
   var canvasWidth = 800;
   var canvasHeight = 800;
   
   // var agents= {1:{x:1,y:2,t:4}};
   

   var update =0;
   // set canvas to full browser width/height
   
   socket2.on('setPerception', function(data){
      perception = data;


      for(var agent  in perception){
          console.log(perception[agent]);
      }

      

      perceptionUpdated=0;

   });


   socket.on('draw_agent', function (data) {

    id = data.agent.id;

    x =data.agent.x ;
    y =data.agent.y ;
    
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

  var token = makeid();
  socket2.emit('getPerception', {token:token});

  d=doDecision(perception);
  if(perceptionUpdated==1){
    
    perceptionUpdated=0;
   
    socket2.emit('message', {influence: d});
  }

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
    if(agent['t']=="RemoteAgent")
      context.fillStyle = "#0000FF";
    context.fill();
}

init();
});