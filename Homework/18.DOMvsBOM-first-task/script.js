let startBtn = document.querySelector(".startbtn");
let stopBtn = document.querySelector(".stopbtn");
let incrementBtn = document.querySelector(".incrementbtn");
let decrementBtn = document.querySelector(".decrementbtn");
let resetBtn = document.querySelector(".resetbtn");
let result = document.querySelector(".result");
let inputBtn = document.querySelector(".inputbtn");
let inputValue = document.querySelector(".inputvalue");

let interval;
let count = 0;

startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 500);
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  startBtn.innerText = "Start";
  resetBtn.style.backgroundColor = "";
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.removeAttribute("disabled");
  startBtn.innerText = "Resume";
  this.setAttribute("disabled", "true");
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  count = 0;
  result.innerText = 0;
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "true");
  startBtn.innerText = "Start";
  this.style.backgroundColor = "red";
});

incrementBtn.addEventListener("click", function () {
  count++;
  result.innerText = count;
});

decrementBtn.addEventListener("click", function () {
  count--;
  result.innerText = count;
});

inputBtn.addEventListener("click", function () {
  count += +inputValue.value;
  result.innerText = count;
});