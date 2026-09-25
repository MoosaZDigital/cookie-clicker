const button2x = document.querySelector("#button2x");
const restartButton = document.querySelector("#restartButton");
const cookieImage = document.querySelector("#cookieImage");
const counter = document.querySelector("#count");

function doubleCount() {
  counter.innerText = counter.innerText * 2;
}

function resetCount() {
  counter.innerText = 0;
}

function increaseCount() {
  counter.innerText++;
}

button2x.addEventListener("click", doubleCount);
restartButton.addEventListener("click", resetCount);
cookieImage.addEventListener("click", increaseCount);
