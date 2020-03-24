class Gift {
    constructor(){
        this.imgList = [{
            img: 'img/disney_1.jpg',
          },
          {
            img: 'img/disney_2.jpg',
          },
          {
            img: 'img/disney_3.jpg',
          },
      
        ];
        this.imageSlide = document.querySelector('.imageSlide')
        document.querySelector('.giftSelect').addEventListener("click", this.randomPicture.bind(this))
    }
    randomPicture(){
      
        let active = Math.floor(Math.random()*3)
        this.imageSlide.style.backgroundImage = `url(${this.imgList[active].img})`
      

    }
}

const gift = new Gift()