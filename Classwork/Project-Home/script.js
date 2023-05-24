const BASE_URL = "http://localhost:8000/flowers";
const BASE_URL2 = "http://localhost:8000/favdata";

let row = document.querySelector(".flower-card");
let search = document.querySelector(".search-input");
let sort = document.querySelector(".sort-btn");
let load= document.querySelector('.load-more-btn')

let allData = [];
let filtered = [];
let defaultArr=[];
let num=3

async function getAllData(arr) {
  row.innerHTML = "";
  arr.slice(0,num).forEach((element) => {
    row.innerHTML += `
        <div class="col col-12 col-sm-6 col-lg-4 card-div">
        <div class="card">
            <img class="card-img-top" src=${element.photo} alt="Card image">
            <div class="card-body">
              <h5 style='color:brown' class="card-title">${element.name}</h5>
              <p>$${element.price}</p>
              <div class="buttons">
                <a class="btn edit-btn" href="addedit.html?id=${element.id}">Edit</a>
                <button class="btn fav-btn" onclick=addFav(${element.id})>Add Fav</button>
                <button class="btn delete-btn" onclick=deleteCard(${element.id})>Delete</button>
            </div>  
            </div>
        </div>
    </div>  
        `;
  });
}

axios(BASE_URL).then((res) => getAllData(res.data));
axios(BASE_URL).then((res) => (allData = res.data));
axios(BASE_URL).then((res) => (defaultArr = res.data));

async function deleteCard(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = allData.filter((item) => item.id != id);
  getAllData(filtered);
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
    alert("jhgf");
  }
}

search.addEventListener("input", (e) => {
  e.preventDefault();
  filtered = allData.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllData(filtered);
});

sort.addEventListener("click", (e) => {
  if (sort.innerHTML == "Sort") {
    filtered = allData.sort((a, b) => a.price - b.price);
    getAllData(filtered);
    sort.innerHTML = "Assending";
  } else if (sort.innerHTML == "Assending") {
    filtered = allData.sort((a, b) => b.price - a.price);
    getAllData(filtered);
    sort.innerHTML = "Dessending";
  }else{
    getAllData(defaultArr)
    sort.innerHTML='Sort'
  }
});

load.addEventListener('click',(e)=>{
    e.preventDefault()
    num=num+3
    getAllData(defaultArr)
})