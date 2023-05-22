const BASE_URL = "http://localhost:8000/news";

let row = document.querySelector(".news-cards");
let sort = document.querySelector(".sort-btn");
let search= document.querySelector('.search-input')
let allData = [];
let filtered = [];
let bool = true;

async function getAllData() {
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = await res.data;
  allData = data;
  filtered = filtered.length ? filtered : data;
  filtered.forEach((element) => {
    row.innerHTML += `
        <div class="col col-12 col-md-4 col-lg-4 col-sm-6 news-card">
        <div class="card" style="width:17rem;">
            <img class="card-img-top news-img" src=${element.photo} alt="Card image">
            <div class="card-body">
              <h5 style='color:brown' class="card-title">${element.name}</h5>
              <hr>
              <p class="card-text">${element.description}</p>
              <p class="card-text">${element.price}</p>
              <button class="btn btn-primary" onclick=addNews(${element.id})>Add Fav</button>
              <button class="btn btn-danger" onclick=deleteNews(${element.id})>Delete</button>
            </div>
            </div>
    </div>
        `;
  });
}

getAllData();

async function deleteNews(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = allData.filter((item) => item.id != id);
  getAllData();
}

sort.addEventListener("click", () => {
  if (bool) {
    filtered = allData.sort((a, b) => a.price - b.price);
    bool = false;
    getAllData();
  } else {
    filtered = allData.sort((a, b) => b.price - a.price);
    bool = true;
    getAllData();
  }
});

let allFav= JSON.parse(localStorage.getItem('favData')) || []

async function addNews(id){
    const res=await axios(`${BASE_URL}/${id}`)
    const data= await res.data
    allFav.push(data)
    localStorage.setItem('favData',JSON.stringify(allFav))
}

search.addEventListener('input',(e)=>{
    e.preventDefault()
    filtered= allData.filter(item=>{
        return item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())

    })
    getAllData()
})