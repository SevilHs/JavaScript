let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://northwind.vercel.app/api/suppliers";

let description = document.querySelector("#name");
let contactName = document.querySelector("#contactName");
let form = document.querySelector("form");


if (id) {
  async function fillInp() {
    const res = await axios(`${BASE_URL}/${id}`);
    const data = await res.data;
    description.value = data.companyName;
    contactName.value = data.contactName;
  }
  fillInp();
}

async function editCard() {
  let obj = {
    companyName: description.value,
    contactName: contactName.value,
  };
  await axios.patch(`${BASE_URL}/${id}`,obj)
  window.location="index.html"
}

async function addCard() {
    let obj = {
      companyName: description.value,
      contactName: contactName.value,
    };
    await axios.post(BASE_URL,obj)
    window.location="index.html"
  }
  

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (id) {
        editCard()
    }else{
        addCard()
    }
})