let row = document.querySelector(".row");
let favData = JSON.parse(localStorage.getItem("favData"));

async function getFavData() {
  row.innerHTML = "";
  favData.forEach((element) => {
    row.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-3 product-card">
        <div class="card-img">
            <img src="./assets/images/p1.png" alt="">
        </div>
        <div class="card-text">
            <h4>${element.companyName}</h4>
            <p>${element.contactName}</p>
            <button onclick=deleteCard(${element.id}) >Remove Card</button>
        </div>
    </div>
        `;
  });
}

getFavData()


function deleteCard(id){
   favData= favData.filter(item=> item.id!=id)
   getFavData()
   localStorage.setItem('favData',JSON.stringify(favData))
}
