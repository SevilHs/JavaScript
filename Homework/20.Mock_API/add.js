const url = "http://localhost:8000/users";

let userName = document.querySelector("#exampleInputName1");
let userEmail = document.querySelector("#exampleInputEmail1");
let form = document.querySelector("form");

async function addUser(obj) {
  await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userName.value && userEmail.value) {
    addUser({
      username: userName.value,
      email: userEmail.value,
    });
    window.location='index.html'
  }else{
    alert('Please fill in the empty field')
  }
});
