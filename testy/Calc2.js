class Calc{
    constructor(){
        this.numbers1 =[
            0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ];
        this.numbers2 =[
            0,1,2,3,4,5,6,7,8,9,10
        ]
        this.firstN = 0,
        this.secondN = 0,
        this.numbers3 = [10,11,12,13,14,15,16,17,18,19,20]
        this.sign = ["+", "-"]
        document.querySelector('button').addEventListener('click',  this.randomNumber.bind(this))
        this.one = document.querySelector('.one');
        this.signDiv = document.querySelector('.sign');
        this.two = document.querySelector('.two');
        this.three = document.querySelector('.three');
    }
    randomNumber(){
        let number1 = Math.floor(Math.random()*21)
        let number2 = Math.floor(Math.random()*21)
        let number3 = Math.floor(Math.random()*11)
        let number4 = Math.floor(Math.random()*11)

        if(number1>number2){
            this.signDiv.textContent = `${this.sign[1]}`
            this.one.textContent = `${this.numbers1[number1]}`
            this.two.textContent = `${this.numbers1[number2]}`
            
        
        }else if(number1<number2){
            if(number1+number2 <=20){
                this.signDiv.textContent = `${this.sign[0]}`
                this.one.textContent = `${this.numbers1[number1]}`
                this.two.textContent = `${this.numbers1[number2]}`
            
            }else if(number1+number2>20){
                this.signDiv.textContent = `${this.sign[0]}`
                this.one.textContent = `${this.numbers2[number3]}`
                this.two.textContent = `${this.numbers2[number4]}`
              
            }
      
    }
    

    }
}

const calc = new Calc()