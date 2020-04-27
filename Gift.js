class Gift {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");
    this.calc = document.querySelector(".calc");
    this.paly = document.querySelector(".play");
    this.h1 = document.querySelector("h1");
    this.imgList = [
      {
        img: "/Mathematics/img/d_1.jpg",
      },
      {
        img: "/Mathematics/img/d_2.jpg",
      },
      {
        img: "/Mathematics/img/d_3.jpg",
      },
      {
        img: "/Mathematics/img/d_4.jpg",
      },
      {
        img: "/Mathematics/img/d_5.jpg",
      },
      {
        img: "/Mathematics/img/d_6.png",
      },
      {
        img: "/Mathematics/img/d_7.jpg",
      },
      {
        img: "/Mathematics/img/d_8.jpg",
      },
      {
        img: "/Mathematics/img/d_9.png",
      },
      {
        img: "/Mathematics/img/d_10.jpg",
      },
      {
        img: "/Mathematics/img/d_11.jpg",
      },
      {
        img: "/Mathematics/img/d_12.jpg",
      },
      {
        img: "/Mathematics/img/d_12.jpg",
      },
    ];
    this.randomPicture();
  }
  randomPicture = () => {
    let active = Math.floor(Math.random() * 12);
    console.log(active);

    this.calc.style.opacity = 0;
    this.wrapper.style.backgroundImage = `url(${this.imgList[active].img})`;
    this.palyAgain();
  };
  palyAgain = () => {
    this.paly.style.display = "block";
    this.h1.style.display = "block";
    this.h1.style.animation = "bigger 2s infinite";
    this.paly.addEventListener("click", () => {
      window.location.assign("./game.html");
    });
  };
}

// const gift = new Gift();
