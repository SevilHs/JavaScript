let input = document.querySelector("#exampleInput1");
let addBtn = document.querySelector("#addbtn");
let ul = document.querySelector("#ul");

let todo = JSON.parse(localStorage.getItem("data")) || [];

addBtn.addEventListener("click", (event) => {
  let obj = {
    id: Date.now(),
    // id: Math.floor(Math.random()*1000),
    todoText: input.value,
  };
  todo.push(obj);
  localStorage.setItem("data", JSON.stringify(todo));
  list();
});

function list() {
  ul.innerHTML = "";
  todo.forEach((element) => {
    ul.innerHTML += `
                <li class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded">
                <div><input type="checkbox">  
                <span>${element.todoText}</span></div>
                          <div>
                            <button type="button" class="btn btn-success" onclick=editList(${element.id})>Edit</button>
                             <button type="button" class="btn btn-danger" id=${element.id} onclick=deleteList(${element.id})>Delete</button>
                            </div>
                        </li>`;
  });
}
list();

function deleteList(id) {
  todo = todo.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(todo));
  list();
}

function editList(id) {
    todo.find(item=>item.id=id ? input.value=item.todoText : null)
    list()
}
