let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
const BASE_URL = "http://localhost:8080/blogs";
let div = document.querySelector(".div");


axios(`${BASE_URL}/${id}`).then(res=>{
  div.innerHTML = `
    <div class="card">
        <h1>${res.data.title}</h1>
        <p>
            ${res.data.body}
        </p>
        <span>Written by${res.data.author}</span>
    </div>`
})
;
