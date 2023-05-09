let input = document.querySelector("#exampleInput1");
let addBtn = document.querySelector("#addbtn");
let ul = document.querySelector("#ul");

let todo = JSON.parse(localStorage.getItem("data")) || [];
let obj;
addBtn.addEventListener("click", (event) => {
  obj = {
    // id: Math.floor(Math.random()*1000),
    id: Date.now(),
    todoText: input.value,
  };
  if (input.value) {
    todo.push(obj);
    localStorage.setItem("data", JSON.stringify(todo));
    list();
  }
});

// window.addEventListener("keyup", function (event) {
//   if (event.code === "Enter") {
//     list();
//   }
// });

function list() {
  ul.innerHTML = "";
  todo.forEach((element) => {
    ul.innerHTML += `
                <li class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded">
                <div><input type="checkbox" class='check'>  
                <span>${element.todoText}</span></div>
                          <div>
                            <button type="button" class="btn btn-success" onclick=editList(${element.id})>Edit</button>
                             <button type="button" class="btn btn-danger" id=${element.id} onclick=deleteList(${element.id})>Delete</button>
                            </div>
                        </li>`;
  });
  input.value = "";
}
list();

function deleteList(id) {
  todo = todo.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(todo));
  list();
}

// let allEdits= document.querySelectorAll('.btn-success')

// allEdits.forEach(item=>{
//   item.addEventListener('click',function(){
//     console.log(this.closest('li').children[0].children[1]);
//     addBtn.innerHTML='Edit'
//     if(addBtn.innerHTML=='Edit'){
//           input.value= this.closest('li').children[0].children[1].innerHTML
//           input.focus()}
//           this.closest('li').children[0].children[1].innerHTML= input.value
//   })
// })

function editList(id) {
  addBtn.innerHTML = "Edit";
  let a = todo.find((item) => item.id == id).todoText;
  if (addBtn.innerHTML == "Edit") {
    input.value = todo.find((item) => item.id == id).todoText;
    input.focus();
    addBtn.addEventListener("click", () => {
      addBtn.innerHTML = "Add";
      // todo.find(el=> el.todoText=a).todoText=input.value
      // obj.todoText = input.value
      // if (input.value) {
      //   todo.push(obj);
      //   localStorage.setItem("data", JSON.stringify(todo));
      //   list();
      // }
    });
  }
}

let allCheck = document.querySelectorAll(".check");
allCheck.forEach((item) => {
  let bool = true;
  item.addEventListener("click", function () {
    if (bool) {
      this.closest("li").style.backgroundColor = "black";
      this.closest("li").style.opacity = "0.5";
      bool = false;
    } else {
      this.closest("li").style.backgroundColor = "";
      this.closest("li").style.opacity = "1";
      bool = true;
    }
  });
});
