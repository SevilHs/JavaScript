let result = document.querySelector("#result");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let additionBtn = document.querySelector("#addition-btn");
let subsractBtn = document.querySelector("#substract-btn");
let multiplyBtn = document.querySelector("#multiply-btn");
let divisionBtn = document.querySelector("#division-btn");
let resetBtn = document.querySelector("#reset-btn");


result.innerHTML = 0;

additionBtn.addEventListener("click", function () {
  result.innerHTML = +value1.value + +value2.value;
  if (value1.value === "" || value2.value === "") {
    alert("Please add value !");
  }
});

subsractBtn.addEventListener("click", function () {
  result.innerHTML = +value1.value - +value2.value;
  if (value1.value === "" || value2.value === "") {
    alert("Please add value !");
  }
});

multiplyBtn.addEventListener("click", function () {
  result.innerHTML = +value1.value * +value2.value;
  if (value1.value === "" || value2.value === "") {
    alert("Please add value !");
  }
});

divisionBtn.addEventListener("click", function () {
  result.innerHTML = +value1.value / +value2.value;
  if (value1.value === "" || value2.value === "") {
    alert("Please add value !");
    result.innerHTML = "0";
  }
});

resetBtn.addEventListener("click", function () {
  result.innerHTML = "0";
  value1.value = "";
  value2.value = "";});