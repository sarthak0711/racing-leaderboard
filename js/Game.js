class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      car1 = createSprite(displayWidth/2 - 350, displayHeight - 150);
      car1.addImage('carimage',c1)
      car2 = createSprite(displayWidth/2  - 150, displayHeight - 150);
      car2.addImage('car2image',c2)
      car3 =createSprite(displayWidth/2 + 80,displayHeight -150);
      car3.addImage('car3image',c3)
      car4 = createSprite(displayWidth/2 + 300, displayHeight - 150);
      car4.addImage('car4image',c4)
      cars=[car1,car2,car3,car4]
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsReached();

    if(allPlayers !== undefined){
      background(ground)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var i=0
      var y=0
      for(var plr in allPlayers){
        y=displayHeight-150-allPlayers[plr].distance
        cars[i].y = y  
        if (plr === "player" + player.index){
          fill("red");
          ellipse(cars[i].x,cars[i].y,100,100)
          camera.position.x = displayWidth/2
          camera.position.y = cars[i].y
        }
        
          
        i++
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance >= 4050){
      gameState=2
      player.rank = rank + 1 
      player.updateCarsReached(player.rank);
      player.update();
    }
    drawSprites();
  }
  
  end(){
    console.log(player.rank)
    form.rank.position(displayWidth/2,displayHeight*5 - player.distance-50)
    form.rank.html('rank :'+player.rank)
  }

  drawLeaderBoard(){
    form.rank.hide();
    Player.getPlayerInfo();
    var y = 50
    for(var plr in allPlayers){
      var h2 = createElement('h2');
      h2.position(displayWidth/2,displayHeight*5 - player.distance+y)
      h2.html(allPlayers[plr].name+ ' : ' + allPlayers[plr].rank)
      y=y+50
    }
  }
}


