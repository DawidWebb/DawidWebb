class Welcome {
  constructor() {
    this.name = [];
    this.input = document.querySelector(".welcome .name");
    document
      .querySelector(".welcome .hello")
      .addEventListener("click", this.startGame.bind(this));
  }
  //  sendName(){
  //     const name = this.input.value
  //     this.name.push(name)

  //  this.startGame()
  //  }
  startGame() {
    window.location.assign("./game.html");
  }
}

const welcome = new Welcome();
