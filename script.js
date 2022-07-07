let num =16;
let squaredNum= num**2;
const container=document.querySelector('.container');
let squareWidth= 100/num;

for (i=0; i<squaredNum; i++) {
  const canvas=document.createElement('div');
  canvas.style.width = squareWidth + "%";
  canvas.classList.add('canvas');
  container.appendChild(canvas);
}