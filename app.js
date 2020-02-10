const generate = document.getElementById('generate'),
roll = document.getElementById('roll'),
sum = document.getElementById('sum');
const diceContainer = document.getElementById('dice-container')

let numOfDice = 0;
let diceArray = [];

generate.addEventListener('click', ()=> {
  new Die();
})
roll.addEventListener('click', ()=> {
  alert('Yep!')
})
sum.addEventListener('click', ()=> {
  // let sume = 0;
  // diceArray.forEach(die => die.roll());
})

class Die {
  constructor(value) {
    this.value = value;
    this.div = document.createElement('div');
    // this.div.classList.add('die');
    this.div.className = 'die';
    this.div.id = numOfDice++;
    this.roll();
    diceContainer.appendChild(this.div);
  }
  roll(){
    let randomVal = Math.floor(Math.floor(Math.random() * 6) + 1) ;
    this.value = randomVal;
    this.div.innerText = this.value
  }
}
