let userName = document.querySelector("#exampleInputName1");
let userEmail = document.querySelector("#exampleInputEmail1");
let editBtn = document.querySelector("#editBtn");

let user = JSON.parse(localStorage.getItem("users"));
const url = "http://localhost:8000/users";

// console.log(user.id);
// fetch(`${url}/${user.id}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function button() {
  userName.value && userEmail.value ? editBtn.disabled=false : editBtn.disabled=true
}
userName.addEventListener('input',()=>{
  button()
})
userEmail.addEventListener('input',()=>{
  button()
})

userName.value = user.username;
userEmail.value = user.email;

editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value && userEmail.value) {
    fetch(`${url}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName.value,
          email: userEmail.value,
        }),
      });
      window.location='index.html'
  }
});
