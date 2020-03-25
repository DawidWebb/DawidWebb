class Gift {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");
    this.calc = document.querySelector(".calc");
    this.paly = document.querySelector(".play");
    this.h1 = document.querySelector("h1");
    this.imgList = [
      {
        img: "/img/d_1.jpg"
      },
      {
        img: "/img/d_2.jpg"
      },
      {
        img: "/img/d_3.jpg"
      },
      {
        img: "/img/d_4.jpg"
      },
      {
        img: "/img/d_5.jpg"
      },
      {
        img: "/img/d_6.jpg"
      },
      {
        img: "/img/d_7.jpg"
      },
      {
        img: "/img/d_8.jpg"
      },
      {
        img: "/img/d_9.jpg"
      },
      {
        img: "/img/d_10.jpg"
      },
      {
        img: "/img/d_11.jpg"
      },
      {
        img: "/img/d_12.jpg"
      }
    ];
    this.randomPicture();
  }
  randomPicture = () => {
    let active = Math.floor(Math.random() * 12);
    this.calc.style.opacity = 0;
    this.wrapper.style.backgroundImage = `url(${this.imgList[active].img})`;
    console.log(this.imgList);
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
