let num = 16;
let squaredNum = num ** 2;
const container = document.querySelector(".container");
let squareWidth = 100 / num;

for (let i = 0; i < squaredNum; i++) {
  const canvas = document.createElement("div");
  canvas.style.width = squareWidth + "%";
  canvas.classList.add("canvas");
  canvas.addEventListener("mouseover", () => {
    canvas.classList.add("colored");
  });
  container.appendChild(canvas);
}

const clear = document.querySelector(".clear");
const numOfGrid = document.querySelector(".number");

function clearColor() {
  const allGrid = document.querySelectorAll(".canvas");
  allGrid.forEach(function (item) {
    item.classList.remove("colored");
  });
}

clear.addEventListener("click", clearColor);

function clearGrid() {
  const allGrid = document.querySelectorAll(".canvas");
  allGrid.forEach(function (item) {
    container.removeChild(item);
  });
}

function changeNumberOfGrid() {
  let grid = prompt("Input the number of squares per side (1-100)");
  if (grid > 100) {
    alert("Out of range!");
    return;
  }
  num = grid;
  squaredNum = num ** 2;
  squareWidth = 100 / num;
  clearGrid();
  for (let i = 0; i < squaredNum; i++) {
    const canvas = document.createElement("div");
    canvas.style.width = squareWidth + "%";
    canvas.classList.add("canvas");
    canvas.addEventListener("mouseover", () => {
      canvas.classList.add("colored");
    });
    container.appendChild(canvas);
  }
}

numOfGrid.addEventListener("click", changeNumberOfGrid);
