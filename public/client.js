document.addEventListener("DOMContentLoaded", function() {
 var mouse = { 
  click: false,
  move: false,
  pos: {x:0, y:0},
  pos_prev: false
};
   // get canvas element and create context
   var canvas  = document.getElementById('drawing');
   var context = canvas.getContext('2d');
   var width   = window.innerWidth;
   var height  = window.innerHeight;
   var socket  = io.connect();

   // set canvas to full browser width/height
   canvas.width = width;
   canvas.height = height;

   // register mouse event handlers
   canvas.onmousedown = function(e){ mouse.click = true; };
   canvas.onmouseup = function(e){ mouse.click = false; };

   canvas.onmousemove = function(e) {
      // normalize mouse position to range 0.0 - 1.0
      mouse.pos.x = e.clientX / width;
      mouse.pos.y = e.clientY / height;
      mouse.move = true;
    };

   // draw line received from server
   socket.on('draw_line', function (data) {
    var line = data.line;
    context.beginPath();
    context.moveTo(line[0].x * width, line[0].y * height);
    context.lineTo(line[1].x * width, line[1].y * height);
    context.stroke();
  });
   
   socket.on('clean', function(){

    console.log('clean');

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, 500, 500);
  });


   socket.on('draw_agent', function (data) {


   	context.beginPath();

    centerX =data.agent.x + 250;
    centerY =data.agent.y + 250;

    

    type = data.agent.type;

    var theta = 0;
    var x = 0;
    var y = 0;
    var radius = 5;
    
    
    context.beginPath();

    if( type == "prey")
      context.strokeStyle = '#7bee8e';
    else if( type == "predator")
      context.strokeStyle = '#820a1e';
    else
      context.strokeStyle = '#8b8682';        

    context.stroke();

    for (var i = 0; i < 10; i++) {
      theta = (i / 10) * 2 * 3.14;
      x = centerX + radius * Math.sin(theta);
      y = centerY + radius * Math.cos(theta);
      context.lineTo(x, y);
    }
    
    
    
    context.stroke();
  });
   
   
 });