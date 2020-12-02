class Form {

  constructor() {
    this.input = createInput(Math.random().toString(36).substring(5));
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
    this.rank = createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 100);

    this.input.position(displayWidth/2, displayHeight/2 -100)
    this.button.position(displayWidth/2, displayHeight/2 + 100);
    this.reset.position(displayWidth - 100, 50)

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      player.updateCarsReached(0);
      window.location.reload();
    });

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, displayHeight/2 -100);
    });

  }
}
