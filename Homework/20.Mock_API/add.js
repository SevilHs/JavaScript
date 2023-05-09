const url = "http://localhost:8000/users";

let userName = document.querySelector("#exampleInputName1");
let userEmail = document.querySelector("#exampleInputEmail1");
let addBtn = document.querySelector("#addBtn");
let form = document.querySelector("form");

// inputs.forEach((item) => {
//   item.addEventListener("input", () =>
//     !item.value ? (addBtn.disabled = true) : (addBtn.disabled = false)
//   );
// });

function button() {
  userName.value && userEmail.value ? addBtn.disabled=false : addBtn.disabled=true
}
button()
userName.addEventListener('input',()=>{
  button()
})
userEmail.addEventListener('input',()=>{
  button()
})


async function addUser(obj) {
  await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addUser({
    username: userName.value,
    email: userEmail.value,
  });
  window.location = "index.html";
});
