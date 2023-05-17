let favUsers = JSON.parse(localStorage.getItem("favUsers")) || [];

let allCards = document.querySelector(".all-cards");

function getUsers() {
    allCards.innerHTML=''
  favUsers.forEach((element) => {
    allCards.innerHTML += `
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src=${element.photo} alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${element.name} ${element.surname}</h5>
          <hr>
          <p class="card-text">${element.email}</p>
          <p class="card-text">${element.date}</p>
          <a href="#" onclick=removeUser('${element.id}') class="btn btn-primary">Remove fav</a>
        </div>
        </div>
        `;
  });
}
getUsers();

function removeUser(id) {
  favUsers = favUsers.filter((item) => item.id != id);
  localStorage.setItem("favUsers", JSON.stringify(favUsers));
  getUsers()
}
