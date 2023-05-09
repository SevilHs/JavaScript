const url = "http://localhost:8000/users";

let allCards = document.querySelector("#allcards");
let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
  window.location = "add.html";
});

async function getAllData() {
  allCards.innerHTML = "";
  await fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        allCards.innerHTML += `
            <div class="col-5" id="card">
            <div>
                <h3>${element.username}</h3>
                <span>${element.email} </span>
            </div>
            <div>
                <i class="fa-solid fa-pen fa-lg me-3" onclick= editCard("${element.id}")  style="color: #2c511f;"></i>
                <i class="fa-solid fa-trash-can fa-lg" onclick= deleteCard("${element.id}") style="color: #c50707;"></i>
            </div>
        </div>
            `;
      });
    });
}

getAllData();

async function deleteCard(id) {
  // console.log(id);
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  getAllData();
}

async function editCard(id) {
  let user = await fetch(`${url}/${id}`).then((res) => res.json());
  localStorage.setItem("users", JSON.stringify(user));
  window.location = "edit.html";
}

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode == 123) {
    e.stopPropagation();
    e.preventDefault();
  }
});
