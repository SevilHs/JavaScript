const BASE_URL = "http://localhost:8000/aroma";
const BASE_URL2 = "http://localhost:8000/aromafav";

let id = new URLSearchParams(window.location.search).get("id");
let title = document.querySelector("#title");
let productName = document.querySelector("#name");
let price = document.querySelector("#price");
let photo = document.querySelector("#photo");
let form = document.querySelector("form");
let formBtn = document.querySelector("#formBtn");

if (id) {
  async function getfavData() {
    const res = await axios(`${BASE_URL}/${id}`);
    const data = await res.data;
    title.value = data.title;
    productName.value = data.name;
    price.value = data.price;
  }
  getfavData();
  formBtn.innerHTML = "Edit";
}


async function editCard() {
  let obj = {
    title: title.value,
    name: productName.value,
    price: price.value,
    photo: photo.value ? `./assets/images/${photo.value.split("\\")[2]}` : "./assets/images/product1.png",
  };
  const res = await axios(BASE_URL2);
  const data = await res.data;
  let check = data.find((item) => item.id == id);
  if (check) {
    await axios.patch(`${BASE_URL2}/${id}`, obj);
  }
  await axios.patch(`${BASE_URL}/${id}`, obj);
  window.location = "index.html";   

}
async function addCard() {
  let obj = {
    title: title.value,
    name: productName.value,
    price: price.value,
    photo: photo.value ? `./assets/images/${photo.value.split("\\")[2]}` : "./assets/images/product1.png",
  };
  await axios.post(BASE_URL, obj);
  window.location = "index.html";   

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id) {
    editCard();
  } else {
    addCard();
  }
});
