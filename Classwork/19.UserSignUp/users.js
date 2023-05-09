let boxes = document.querySelector(".boxes");
let addBtn = document.querySelector("#add");

let data = JSON.parse(localStorage.getItem("users"));

function cards() {
  boxes.innerHTML = "";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.innerHTML = `
          <h1>User</h1>
          <p>name: ${item.username}</p>
          <p>email:${item.email} </p>
          <button onclick=deleteCard(${item.id})>Delete</button>
          `;
    boxes.append(box);
    box.classList.add("border");
  });
}

addBtn.addEventListener("click", () => {
  window.location = "index.html";
});

cards();

function deleteCard(id) {
  data = data.filter((el) => el.id != id);
  localStorage.setItem("users", JSON.stringify(data));
  cards();
}
