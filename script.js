function generateColor() {
  let array = []
  for (let i = 0; i < 3; i += 1) {
    let index = Math.floor(Math.random() * 256);
    array.push(index)
  }
  let color = array.join(', ')
  return "(" + color + ")";
}

function sixColor() {
  let array = [];
  for (let i = 0; i < 5; i += 1) {
    let colorRGB = "rgb" + generateColor();
    array.push(colorRGB)
  }
  let colorRef = document.getElementById('rgb-color').innerHTML;
  array.push('rgb' + colorRef)
  return array;
}

function sixColorShuffled() {
  let array = sixColor();
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
  return array
}

function attributeColor() {
  const circles = document.getElementsByClassName('ball');
  let colors = sixColorShuffled()
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = colors[i];
  }
}

function checkAnswer(event) {
  const stringRef = document.getElementById('rgb-color').innerHTML;
  const stringCor = event.target.style.backgroundColor;

  const reg = /\d+/g;

  const integersRef = stringRef.match(reg).toString()
  const integersCor = stringCor.match(reg).toString()

  const answer = document.getElementById('answer')
 
  if (integersRef === integersCor) {
    answer.innerHTML = "Acertou!"
  }
  else {
    answer.innerHTML = "Errou! Tente novamente!"
  }
}

function resetGame() {
  const colorRef = document.getElementById('rgb-color');
  colorRef.innerHTML = generateColor()

  attributeColor()

  const answer = document.getElementById('answer');
  answer.innerHTML = '"Escolha uma cor"'
}

window.onload = function() {
  attributeColor();

  const circles = document.getElementsByClassName('ball');
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].addEventListener('click', checkAnswer)
  }

  const botaoReset = document.getElementById('reset-game');
  botaoReset.addEventListener('click', resetGame)
}
