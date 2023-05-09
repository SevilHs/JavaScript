let url = "https://northwind.vercel.app/api/orders";

let allCards = document.querySelector("#allcards");
let addBtn = document.querySelector("#addBtn");

async function getData() {
  await fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => {
      let filtered = data.filter((elem) => elem.shipAddress.country == "USA");
      filtered.forEach((element) => {
        allCards.innerHTML += ` <div class="col-5" id="card">
            <div>
              <h3>${element.shipAddress.city}</h3>
              <p>${element.shipAddress.country}</p>
            </div>
            <div>
              <i class="fa-solid fa-pen mx-2 " style="color: #3c5f25"></i>
              <i class="fa-solid fa-trash-can"  onclick=deleteCard("${element.id}") id="${element.id}" style="color: #b11616"></i>
            </div>
          </div>`;
      });
    });
}

getData();

addBtn.addEventListener("click", () => {
  window.location = "add.html";
});
                                                                      
async function deleteCard(id){
    // console.log(id);
   await fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    getData()
}

