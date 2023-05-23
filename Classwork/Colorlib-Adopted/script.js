const BASE_URL = "http://localhost:8080/children";
const BASE_URL2 = "http://localhost:8080/favdata";

let row = document.querySelector(".all-cards");
let search = document.querySelector(".search-input");
let sort = document.querySelector(".sort-btn");
let load = document.querySelector(".load-btn");

let allData = [];
let filtered = [];
let bool = true;
let num = 3;

async function getAllData() {
  console.log(num);
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = await res.data;
  allData = data;
  filtered = filtered.length ? filtered.slice(0, num) : data.slice(0, num);
  filtered.forEach((element) => {
    row.innerHTML += `
      <div class="col  col-12 col-sm-6 col-md-4 children-card ">
      <div class="card" style="width:17rem;">
          <img class="card-img-top" src=${element.photo} alt="Card image">
          <div class="card-body">
            <h5 style='color:brown' class="card-title">${element.name} <span>${element.years} yrs. old</span></h5>
            <div class="buttons">
                <a class="btn edit-btn" href="adduser.html?id=${element.id}">Edit</a>
                <button class="btn fav-btn" onclick=addFav(${element.id})>Add Fav</button>
                <button class="btn delete-btn" onclick=deleteCard(${element.id})>Delete</button>
            </div>  
          </div>
          </div>
  </div>
        `;
  });
}
getAllData();

sort.addEventListener("click", (e) => {
  if (sort.innerHTML == "Sort") {
    filtered = allData.slice(0, num).sort((a, b) => a.years - b.years);
    sort.innerHTML = "Assending";
  } else if (sort.innerHTML == "Assending") {
    filtered = allData.slice(0, num).sort((a, b) => b.years - a.years);
    sort.innerHTML = "Dessending";
  } else {
    sort.innerHTML = "Sort";
    filtered = allData;
  }
  getAllData();
});

search.addEventListener("input", (e) => {
  filtered = allData.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getAllData();
});

async function deleteCard(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = filtered.filter((item) => item.id != id);
  getAllData();
}

async function addFav(id) {
  const res = await axios(`${BASE_URL}/${id}`);
  const data = await res.data;
  const res2 = await axios(BASE_URL2);
  const data2 = await res2.data;
  let check = data2.find((item) => item.id == id);
  if (!check) {
    await axios.post(BASE_URL2, data);
  } else {
    alert("ajsjsj");
  }
}

load.addEventListener("click", (e) => {
  e.preventDefault();
  num = num + 3;
  getAllData();
});
