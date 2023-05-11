const BASE_URL = "http://localhost:8080/blogs";

let allCards = document.querySelector(".allCards");
let searchinp = document.querySelector("#searchinp");

axios.get(BASE_URL).then((res) => {
  drawCards(res.data);
});

function drawCards(blogs) {
  allCards.innerHTML = "";

  blogs.forEach((element) => {
    allCards.innerHTML += `
          <div class="card">
          <h1>${element.title}</h1>
          <p>
            ${element.body
              .split("")
              .splice(0, 200)
              .join("")}...<a href="details.html?id=${
      element.id
    }" >Read More</a>
          </p>
          <span>Written by${element.author}</span>
          <button onclick=deleteCard(${element.id})>Delete</button>
          <a href="newblog.html?id=${element.id}" class="editbtn">Edit</a>
        </div>
          `;
  });
}

function deleteCard(id) {
  axios.delete(`${BASE_URL}/${id}`);
}

searchinp.addEventListener("input", (e) => {
  axios(BASE_URL).then((res) => {
    let filtered = res.data.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    drawCards(filtered);
  });
  console.log("h");
});
