const BASE_URL = "http://localhost:8080/users";
let id = new URLSearchParams(window.location.search).get("id");

let firstName = document.querySelector("#exampleInputName");
let surname = document.querySelector("#exampleInputLastname");
let email = document.querySelector("#exampleInputEmail");
let file = document.querySelector("#inputGroupFile01");
let form = document.querySelector("form");

// console.log(id);
if(id){
    async function getData() {
        // console.log('kk');
        const res = await axios(`${BASE_URL}/${id}`);
        const data = res.data;
        console.log(data);
        firstName.value = data.name;
        surname.value=data.surname;
        email.value=data.email;
      }
      getData();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date();
  let obj = {
    photo: `./assets/images/${file.value.split("\\")[2]}`,
    name: firstName.value,
    surname: surname.value,
    email: email.value,
    date: date,
  };
  if (id) {
    console.log("kjbv");
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(BASE_URL, obj);
  }
  window.location = "./index.html";
});
