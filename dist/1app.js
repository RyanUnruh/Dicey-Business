var Die = /** @class */ (function () {
    function Die(value) {
        this.roll();
        this.div = document.createElement('div');
        this.div.value.add(getRandomInt());
        this.div.classList.add('square');
        this.div.style.height = 100;
        px;
        this.div.style.width = 100;
        px;
        this.div.addEventListener('click', (function () { }));
        document.body.appendChild(this.div);
    }
    Die.prototype.roll = function () {
        getRandomInt();
    };
    Die.prototype.getRandomInt = function () {
        return Math.floor(Math.floor(Math.random() * 6) + 1);
    };
    return Die;
}());
var generate = document.getElementById('generate');
generate.addEventListener('click', insertSquare);
{
    function insertSquare() {
        document.body.appendChild(div);
    }
}
