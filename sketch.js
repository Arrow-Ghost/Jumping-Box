var canvas;
var music;
var blue,yellow,pink,green,ball; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    blue = createSprite(90,580,180,40);
    blue.shapeColor = "#0000ff";
    yellow = createSprite(300,580,180,40);
    yellow.shapeColor = "#ff9900";
    pink = createSprite(505,580,180,40);
    pink.shapeColor = "#cc0066";
    green = createSprite(710,580,180,40);
    green.shapeColor = "#009900";
    ball = createSprite(90,545,30,30);
    
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if (ball.x > 80){
        ball.velocityX = 1;
        ball.velocityY = -1;
        ball.shapeColor = "#0000ff";
    }
    if (ball.x > 200){
        ball.velocityX = 1;
        ball.velocityY = 1;
        ball.shapeColor = "white";
    }
    if(ball.x > 310){
        ball.velocityX = 1;
        ball.velocityY = -1;
        ball.shapeColor = "#ff9900";
    }
    if(ball.x > 400){
        ball.velocityX = 1;
        ball.velocityY = 1;
        ball.shapeColor = "white";
    }
    if(ball.x > 492){
        ball.velocityX = 1;
        ball.velocityY = -1;
        ball.shapeColor = "#cc0066";
    }
    if(ball.x > 600) {
        ball.velocityX = 1;
        ball.velocityY = 1;
        ball.shapeColor = "white";
    }
    if(ball.x > 710) {
        ball.velocityX = 1;
        ball.velocityY = -1;
        ball.shapeColor = "#009900";
    }
    if(ball.x > 785) {
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    drawSprites();
}
