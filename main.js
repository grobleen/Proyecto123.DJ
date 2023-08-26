//crear variable difference como 0
difference=0
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
    //crear la variable canvas con un tamaño de 550,550
  canvas=createCanvas(550,550)
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  //encender el elemento PoseNet enviando el parametro 'pose' y la funcion gotPoses
  poseNet.on('pose',gotPoses)
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    //imprimir en consola los resultados
    console.log(results)

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
  //establecer el background con algun color
background("#7FD6F4")

  document.getElementById("font_size").innerHTML = "El tamaño de la fuente es: = " + difference +"px";
  //establecer el tamaño de letra con la variable difference
textSize(difference)  
  fill('#FFE787');
  text('Pedro', 50, 400);
}
