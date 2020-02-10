class Die {
  constructor(value) {
    this.roll()
    this.div = document.createElement('div');
    this.div.value.add(getRandomInt());
    this.div.classList.add('square')
    this.div.style.height = 100px;
    this.div.style.width = 100px;
    this.div.addEventListener('click', (=> { }))

    document.body.appendChild(this.div)
  }
  roll() {
    getRandomInt()
  }

  getRandomInt() {
    return Math.floor(Math.floor(Math.random() * 6) + 1 ;
  }
  
}



let generate = document.getElementById('generate');
generate.addEventListener('click', insertSquare){
  function insertSquare () {
    document.body.appendChild(div)
    
  }
}




