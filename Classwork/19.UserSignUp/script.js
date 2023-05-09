let form = document.querySelector("form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#check");
let submitBtn = document.querySelector("#submitbtn");
let allInputs = document.querySelector("input");

submitBtn.setAttribute("disabled", true);

let data = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let obj = {
    id: Date.now(),
    username: userName.value,
    email: email.value,
    password: password.value,
    checkbox: checkbox.checked,
  };
  data.push(obj);
  localStorage.setItem("users", JSON.stringify(data));
  window.location = "users.html";
});

checkbox.addEventListener("input", () => {
  checkDisabled();
});
userName.addEventListener("input", () => {
  checkDisabled();
});
password.addEventListener("input", () => {
  checkDisabled();
});
email.addEventListener("input", () => {
  checkDisabled();
});

function checkDisabled() {
  if (userName.value && email.value && password.value && checkbox.checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
}
