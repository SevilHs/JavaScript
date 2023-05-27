let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8000/gym";
const BASE_URL2 = "http://localhost:8000/gymcard";

let title = document.querySelector("#title");
let description = document.querySelector("#description");
let photo = document.querySelector("#photo");
let form = document.querySelector("form");
let button = document.querySelector("#form-btn");
let favData=[]
// console.log();
if (id) {
  async function getData() {
    const res = await axios(`${BASE_URL2}/${id}`);
    const data =await res.data;
    favData=data
    title.value = data.title;
    description.value = `${data.description.slice(0,35)}...`;
  }
  description.addEventListener("focus",()=>{
    description.value=favData.description
  })
  button.innerHTML = "Edit Card";
  getData();
}

async function editCard() {
    let obj={
        title:title.value,
        description:description.value,
        photo:photo.value ? `./assets/images/${photo.value.split('\\')[2]}` :"./assets/images/default.png"
    }
    await axios.patch(`${BASE_URL}/${id}`,obj)
    await axios.patch(`${BASE_URL2}/${id}`,obj)
}

async function addCard(){
    let obj={
        title:title.value,
        description:description.value,
        photo:photo.value ? `./assets/images/${photo.value.split('\\')[2]}` :"./assets/images/default.png"
    }
    await axios.post(BASE_URL,obj)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(id){
        editCard()
    }else{
        addCard()
    }
    window.location="index.html"
})