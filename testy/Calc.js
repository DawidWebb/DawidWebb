class Calc{
    constructor(){
        this.numbers =[
            0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ];
        this.sign = ["+", "-"]
        document.querySelector('button').addEventListener('click',  this.randomNumber.bind(this))
        this.one = document.querySelector('.one');
        this.signDiv = document.querySelector('.sign');
        this.two = document.querySelector('.two');
        this.three = document.querySelector('.three');
    }
    randomNumber(){
        let number = Math.floor(Math.random()*21)
        let number1 = Math.floor(Math.random()*21)
        if(number>number1){
            this.signDiv.textContent = `${this.sign[1]}`
        }else if(number<number1){
        this.signDiv.textContent = `${this.sign[0]}`
        }
        if ( this.signDiv.textContent === this.sign[0] && (number+number1)>20){
            this.one.textContent = `${this.numbers[number]}`
            this.two.textContent = `${this.numbers[number1]}`
            this.three.textContent = `${this.numbers[number]+this.numbers[number1]}`
            
        }else{
            this.one.textContent = `${this.numbers[number]}`
            this.two.textContent = `${this.numbers[number1]}`
            this.three.textContent = ""
        }

    }
}
const calc = new Calc()