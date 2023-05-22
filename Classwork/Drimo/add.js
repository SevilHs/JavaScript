const BASE_URL = "http://localhost:8000/news";

let firstName = document.querySelector("#exampleInputName");
let description = document.querySelector("#exampleInputDescription");
let price = document.querySelector("#price");
let form = document.querySelector("form");
let photo=document.querySelector('#photo')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    name: firstName.value,
    description: description.value,
    price: price.value,
    photo: `./assets/images/${photo.value.split("\\")[2]}`,
  };
  axios.post(BASE_URL, obj);
  window.location='index.html'
//   console.log(obj);
});
