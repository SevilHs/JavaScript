let title = document.querySelector("#title");
let textareaBody = document.querySelector("#textareaBody");
let selectAuthor = document.querySelector("#selectAuthor");
let form = document.querySelector("form");
let text = document.querySelector(".formh1");
let addBtn = document.querySelector(".addBtn");

let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/blogs";

if (id) {
    text.innerHTML='Update Blog'
    addBtn.innerHTML='Edit'

  axios(`${BASE_URL}/${id}`).then((res) => {
    (title.value = res.data.title),
      (textareaBody.value = res.data.body),
      (selectAuthor.value = res.data.author);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id) {
    
    let obj = {
      title: title.value,
      body: textareaBody.value,
      author: selectAuthor.value,
    };
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    if (title.value && textareaBody.value) {
      let obj = {
        title: title.value,
        body: textareaBody.value,
        author: selectAuthor.value || "lorem",
      };
      axios.post(`${BASE_URL}`, obj);
      
    }
  }
  window.location = "home.html";
});
