function generateColor() {
  let array = []

  for (let i = 0; i < 3; i += 1) {
    let index = Math.floor(Math.random() * 256);
    array.push(index)
  }
  
  let color = array.join(', ')
  
  return "rgb(" + color + ")"
}

function attributeColor() {
  const circles = document.getElementsByClassName('ball');

  for (let i = 0; i < circles.length; i += 1) {
    const randomColor = generateColor();
    circles[i].style.backgroundColor = randomColor;
  }
}

window.onload = function() {
  attributeColor();
}