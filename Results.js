class Results extends Calc {
  constructor(props) {
    super(props);
    this.points = 0;
    this.score = document.querySelector("div.score");
    document.getElementById("wynik");
    document.getElementById("results");
    document
      .getElementById("check")
      .addEventListener("click", this.check.bind(this));
  }
  check() {
    if (this.oneN.textContent === "") {
      alert("NAJPIERW WYLOSUJ");
    } else if (
      (this.firstN > this.secondN &&
        this.firstN - this.secondN == wynik.value) ||
      (this.firstN < this.secondN &&
        this.firstN + this.secondN == wynik.value) ||
      (this.firstN == this.secondN && this.firstN + this.secondN == wynik.value)
    ) {
      const point = new Point();
      this.points++;
      if (this.points === 1) {
        const gift = new Gift();
      }
    } else {
      alert("SPRÓBUJ JESZCZE RAZ");
    }
    this.oneN.textContent = "";
    this.twoN.textContent = "";
    wynik.value = "";

    // console.log(this.points);
  }
}
const results = new Results();
