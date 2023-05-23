let allFav = JSON.parse(localStorage.getItem("favData"));
let row = document.querySelector(".row");

async function getAllFav() {
    row.innerHTML=''
  allFav.forEach((element) => {
    row.innerHTML += `
        <div class="col col-4">
        <div class="card" style="width:17rem;">
            <img class="card-img-top" src=${element.photo} alt="Card image">
            <div class="card-body">
              <h5 style='color:brown' class="card-title">${element.name}</h5>
              <hr>
              <p class="card-text">${element.description}</p>
              <p class="card-text">${element.price}</p>
              <button class="btn btn-danger" onclick=removeFav(${element.id})>Remove</button>
            </div>
            </div>
    </div>
        `;
  });
}

getAllFav();

async function removeFav(id) {
  allFav = allFav.filter((item) => {
    return item.id != id;
  });
  localStorage.setItem("favData", JSON.stringify(allFav));
  getAllFav();
}
