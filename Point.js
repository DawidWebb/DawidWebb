class Point {
  constructor() {
    this.addPoint();
  }
  addPoint() {
    this.div = document.createElement("div");
    this.div.classList.add("giftOne");
    this.results = document.getElementById("results").appendChild(this.div);
  }
}
