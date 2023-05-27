const BASE_URL = "http://localhost:8000/gym";
const BASE_URL2 = "http://localhost:8000/gymcard";

let row = document.querySelector(".we-offer-sec-div");
let search = document.querySelector("#search");
let sort = document.querySelector("#sort");
let load = document.querySelector(".load-more-btn");
let menuBtn=document.querySelector('.menu-btn')
let menu=document.querySelector('.burger-modal')
let arrowUp=document.querySelector('.arrow-up')

let allData = [];
let filtered = [];
let defaultArr = [];
let favData;
let num = 3;
let menuCheck=true

async function getAllData() {
  console.log(num);
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = res.data;
  allData = data;
  filtered = filtered.length || search.value ? filtered.slice(0, num) : data.slice(0, num);
  filtered.forEach((element) => {
    row.innerHTML += `
           <span class="col col-12 col-lg-4">
            <div class="we-offer-card">
              <img src="${element.photo}" />
              <h5>${element.title}</h5>
              <p>${element.description}</p>
              <div class="buttons">
                <a href="addedit.html?id=${element.id}" class="edit-btn same">EDIT</a>
                <button class="delete-btn same" onclick=deleteCard(${element.id},this)>DELETE</button>
                <button class="fav-btn same" onclick= addFav(${element.id})>ADD FAV</button>
              </div>
            </div>
          </span> 
        `;
  });
}

getAllData();

async function deleteCard(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  await axios.delete(`${BASE_URL2}/${id}`);
  // filtered=filtered.filter(item=>item.id!=id)
  // defaultArr=filtered
  btn.closest("span").remove();
}

async function addFav(id) {
  //   const res = await axios(`${BASE_URL}/${id}`);
  //   const data = res.data;
  favData = allData.find((item) => item.id == id);
  const res2 = await axios(BASE_URL2);
  const data2 = res2.data;
  let check = data2.find((item) => item.id == id);
  if (!check) {
    await axios.post(BASE_URL2, favData);
  } else {
    alert("Nonono!");
  }
}

search.addEventListener("input", (e) => {
  e.preventDefault();
  filtered = allData.slice(0, num).filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  defaultArr = filtered;
  getAllData();
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  num = num + 3;
  filtered = allData.slice(0, num).filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase());
  });
  defaultArr = filtered;
  getAllData();
  if (allData.length<=num) {
    load.disabled=true
    load.style.opacity=0.7
  }
});

sort.addEventListener("click", (e) => {
  e.preventDefault();
  if (sort.innerHTML == "Ascending") {
    sort.innerHTML = "Descending";
    filtered.sort((a, b) => a.title.localeCompare(b.title));
    getAllData();
  } else if (sort.innerHTML == "Descending") {
    sort.innerHTML = "Default";
    filtered.sort((a, b) => b.title.localeCompare(a.title));
    getAllData();
  } else {
    sort.innerHTML = "Ascending";
    filtered = defaultArr ;
    getAllData();
  }
});


menuBtn.addEventListener('click',()=>{
  if(menuCheck){
    menu.style.display="flex"
    menuCheck=false
  }else{
    menu.style.display="none"
    menuCheck=true
  }
})

window.addEventListener('scroll',()=>{
  if(window.scrollY<100){
    arrowUp.style.display="none"
  }else{
    arrowUp.style.display="inline-block"

  }
})