let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/children";

let cname = document.querySelector("#exampleInputName");
let age = document.querySelector("#age");
let photo = document.querySelector("#photo");
let form = document.querySelector("form");

if (id) {
  async function fillForm() {
    const res = await axios(`${BASE_URL}/${id}`);
    const data = res.data;
    console.log(data);
    cname.value=data.name
    age.value=data.years
  }

  fillForm()
}

async function editCard(){
  let obj={
    name:cname.value,
    years:age.value,
    photo:`./assets/images/${photo.value.split('\\')[2]}`
  }
  await axios.patch(`${BASE_URL}/${id}`,obj)
}

async function addCard(){
  let obj={
    name:cname.value,
    years:age.value,
    photo:`./assets/images/${photo.value.split('\\')[2]}`
  }
  axios.post(BASE_URL,obj)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (id) {
        editCard()
    }else{
      addCard()
    }
    window.location="index.html"
})