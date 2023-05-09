let nameInp = document.querySelector("#nameinp");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#checked");
let radio = document.querySelectorAll('input[name="radiocircle"]');
let submit = document.querySelector("#submit");

checkbox.style.accentColor = "blue";
submit.disabled = "true";

nameInp.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
nameInp.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
  this.style.color = "black";
});
surname.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
surname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

email.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});

email.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

password.addEventListener("focus", function () {
  this.value = "1232454554";
});

password.addEventListener("mouseout", function () {
  this.value = "";
});

checkbox.addEventListener("click", function () {
  if(checkbox.checked){
    checked.style.visibility = "visible";
  }else{
    checked.style.visibility = "hidden";
    submit.disabled = true;
  }
  if (nameInp.value && surname.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.disabled = "true";
  }
});

radio.forEach((element) => {
  element.addEventListener("click", function () {
    alert("Hello");
  });
});
