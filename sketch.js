var canvas, backgroundImage,car1,car2,car3,car4,cars,c1,c2,c3,c4,track,ground,rank;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
c1 = loadImage('images/car1.png');
c2 = loadImage('images/car2.png');
c3 = loadImage('images/car3.png');
c4 = loadImage('images/car4.png');
track = loadImage("images/track.jpg");
ground = loadImage('images/ground.png')
}

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && gameState === 0){
    game.update(1);
  }

  if(gameState === 2){
    game.end();
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(rank === 4){
    game.update(2);
    game.drawLeaderBoard();
  }

  
}