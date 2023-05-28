const BASE_URL = "http://localhost:8000/aroma";
const BASE_URL2 = "http://localhost:8000/aromafav";

let row = document.querySelector(".product-cards");
let search = document.querySelector("#search");
let sort = document.querySelector("#sortBtn");
let load = document.querySelector("#loadMoreBtn");

let allData = [];
let filtered = [];
let defaultArr = [];
let num = 4;

async function getAllData() {
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = res.data;
  allData = data;
  filtered = filtered.length || search.value ? filtered : data;
  filtered.slice(0, num).forEach((element) => {
    console.log(`${element.id}`);
    row.innerHTML += `
        <span class="col col-md-6 col-lg-4 col-xl-3 product-card">
        <div class="product-card-div">
          <div class="img-div">
            <img src="${element.photo}" alt="product-img" />
            <div class="actions">
              <a href="addedit.html?id=${element.id}" class="fa-regular fa-pen-to-square product-icon"></a>
              <i class="fa-regular fa-trash-can product-icon" onclick=deleteCard(${element.id},this)></i>
              <i class="fa-regular fa-heart product-icon" onclick=addFav(${element.id})></i>
            </div>
          </div>
          <p>${element.title}</p>
          <h5>${element.name}</h5>
          <p class="product-price">$${element.price}</p>
        </div>
      </span>
        `;
  });
}

getAllData();

async function deleteFavCard(id) {
  const res = await axios(BASE_URL2);
  const data = await res.data;
  let check = data.find((item) => item.id == id);
  if (check) {
    await axios.delete(`${BASE_URL2}/${id}`);
  }
}
async function deleteCard(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  deleteFavCard(id);
  btn.closest("span").remove();
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
    alert("Nonono!");
  }
}
search.addEventListener("input", (e) => {
  filtered = allData.slice(0, num).filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  defaultArr = filtered;
  getAllData();
});

load.addEventListener("click", () => {
  num = num + 4;
  filtered = allData.slice(0, num).filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase());
  });
  defaultArr = filtered;
  if(allData.length<=num){
    load.disabled=true
    load.style.opacity=0.7
  }
  getAllData();
});

sort.addEventListener("click", (e) => {
  e.preventDefault();
  if (sort.innerHTML == "Ascending") {
    sort.innerHTML = "Descending";
    filtered = filtered.slice(0, num).sort((a, b) => a.price - b.price);
  } else if (sort.innerHTML == "Descending") {
    sort.innerHTML = "Default";
    filtered = filtered.slice(0, num).sort((a, b) => b.price - a.price);
  } else {
    filtered = defaultArr;
    sort.innerHTML = "Ascending";
  }
  getAllData();
});


