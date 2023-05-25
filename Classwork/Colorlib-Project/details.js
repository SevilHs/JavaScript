let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://northwind.vercel.app/api/suppliers";

let card= document.querySelector('.card-div')

async function getDetails(){
    const res = await axios(`${BASE_URL}/${id}`);
    const data = await res.data;
    card.innerHTML=`
    <div class="card-img">
    <img src="./assets/images/p1.png" alt="">
</div>
<div class="card-text">
    <h4>${data.companyName}</h4>
    <p>${data.contactName}</p>
</div>
    `
}
getDetails()