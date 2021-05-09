var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  block1 = new block1(200,400,50,20);
  block2 = new block2(250,400,50,20);
  block3 = new block3(300,400,50,20);
  block4 = new block4(350,400,50,20);

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
