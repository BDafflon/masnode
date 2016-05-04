
var agents= {};
var agents2={};
var perception={};
var perceptionUpdated=0;

var defaultComportement = "function doDecision(perceptions){ \n //perceptions = [{x:positionX,y:positionY,t:type} \n var x = (Math.random() -0.5) * 5; \n var y = (Math.random() -0.5) * 5; \n influence = {x:x,y:y}; \n return influence;\n}\n";
 
 function run(comportement) {
  //alert(comportement);
    var el = document.getElementById('cnsl');
    

    var scriptText = comportement;
   
    var oldScript = document.getElementById('scriptContainer');
    var newScript;

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }

    newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = comportement ;
    document.body.appendChild(newScript);

  
} 
  
function runComportement(){

var e = document.getElementById("idList").value;
var val = e;
 
  focusComportement(val);

}

function focusComportement(val){
 
  listComportement[val].comportement=document.getElementById('cnsl').innerHTML;

}
function updateComportement(val){
   
  document.getElementById('cnsl').innerHTML = listComportement[val].comportement;

}

function addInList(type)
{
  //console.log("type "+listComportement[type].comportement);

  if(listComportement[type]==undefined){

    var List = document.getElementById("idList");
    List.options.add(new Option("agent : "+type, type, false, false));
    listComportement[type]={comportement:defaultComportement};
  }
}

document.addEventListener("DOMContentLoaded", function() {
  
  run(defaultComportement);
  doDecision([]);
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
   
 
  var s = socket2;

  socket2.on('addTypeAgent', function(data){
  
    console.log("add type : "+data.type);
    addInList(data.type);
  });

  socket2.on('setPerception', function(data){
      var perceptions = data.perception;
      var id=data.id;

       
      d={};
      run(listComportement[data.type].comportement);
      d=doDecision(perceptions);

     

      s.emit('setInfluence2D', {id: id, influence: d});

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