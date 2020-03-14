var generate = document.getElementById('generate'), roll = document.getElementById('roll'), sum = document.getElementById('sum');
var diceContainer = document.getElementById('dice-container');
var numOfDice = 0;
var diceArray = [];
generate.addEventListener('click', function () {
    new Die();
});
roll.addEventListener('click', function () {
    alert('Yep!');
});
sum.addEventListener('click', function () {
    // let sume = 0;
    // diceArray.forEach(die => die.roll());
});
var Die = /** @class */ (function () {
    function Die(value) {
        this.value = value;
        this.div = document.createElement('div');
        // this.div.classList.add('die');
        this.div.className = 'die';
        this.div.id = numOfDice++;
        this.roll();
        diceContainer.appendChild(this.div);
    }
    Die.prototype.roll = function () {
        var randomVal = Math.floor(Math.floor(Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.innerText = this.value;
    };
    return Die;
}());
