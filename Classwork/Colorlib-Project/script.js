const BASE_URL = "https://northwind.vercel.app/api/suppliers";

let header = document.querySelector("header");
let row = document.querySelector(".all-card");
let search= document.querySelector('.search')
let sort= document.querySelector('.sort-btn')
let load=document.querySelector('.load-btn')

let favData = JSON.parse(localStorage.getItem("favData")) || [];
let filtered = [];
let allData = [];
let defaultArr = [];
let num = 4;

async function getAlldata() {
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = res.data;
  allData = data;
  filtered = filtered.length ? filtered.slice(0, num) : data.slice(0, num);
  filtered.forEach((element) => {
    row.innerHTML += `
    <div class="col col-12 col-md-6 col-lg-3 product-card">
    <div class="card-img">
        <img src="./assets/images/p1.png" alt="">
    </div>
    <div class="card-text">
        <h4>${element.companyName}</h4>
        <p>${element.contactName}</p>
        <a href="details.html?id=${element.id}" >VIEW DETAILS</a>
        <div class="buttons">
            <a class="edit-btn" href="addedit.html?id=${element.id}">EDIT</a>
            <button class="add-fav-btn" onclick=addFav(${element.id})>ADD FAV</button>
            <button class="delete-btn" onclick=deleteCard(${element.id})>DELETE</button>
        </div>
    </div>
</div>
    `;
  });
}
getAlldata();

async function deleteCard(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = allData.slice(0, num).filter((item) => item.id != id);
  getAlldata();
}


async function addFav(id) {
  const res = await axios(`${BASE_URL}/${id}`);
  const data = await res.data;
  let check = favData.find((item) => item.id == id);
  if (!check) {
    favData.push(data);
    localStorage.setItem("favData", JSON.stringify(favData));
  }else{
    alert('Nonono')
  }
}

search.addEventListener('input',(e)=>{
    e.preventDefault()
    filtered=allData.slice(0,num).filter(item=>{
      return  item.contactName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    getAlldata()
    
})


load.addEventListener('click',(e)=>{
    e.preventDefault()
    num=num+4
    filtered=allData.slice(0,num).filter(item=>{
        return  item.contactName.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
      })
      defaultArr=filtered
    getAlldata()
})

sort.addEventListener("click",()=>{
    if(sort.innerHTML=="Assending"){
        filtered= filtered.sort((a,b)=>a.contactName.localeCompare(b.contactName))
        sort.innerHTML="Dessending"
        getAlldata()
    }else if(sort.innerHTML=='Dessending'){
        filtered= filtered.sort((a,b)=>b.contactName.localeCompare(a.contactName))
        sort.innerHTML="Default"
        getAlldata()
    }else{
        sort.innerHTML="Assending"
        filtered=defaultArr
        getAlldata()
    }
})



window.addEventListener("scroll", () => {
  header.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
  header.style.transition = "all 0.7s";
  header.style.opacity = 0.9;
});
