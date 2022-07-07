let num =16;
let squaredNum= num**2;
const container=document.querySelector('.container');
let squareWidth= 100/num;


for (let i=0; i<squaredNum; i++) {
  const canvas=document.createElement('div');
  canvas.style.width = squareWidth + "%";
  canvas.classList.add('canvas');
  canvas.addEventListener('mouseover', () => {
  canvas.classList.add ('colored');
  });
  container.appendChild(canvas);
}

const clear = document.querySelector('.clear');
const allGrid = document.querySelectorAll('.canvas');
function clearColor() {
  allGrid.forEach(function(item) {
  item.classList.remove('colored');
  });
}
clear.addEventListener('click', clearColor)
