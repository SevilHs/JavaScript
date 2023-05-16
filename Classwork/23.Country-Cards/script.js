const Base_URL = "https://restcountries.com/v2/all";

let row = document.querySelector(".row");
let input = document.querySelector("#input-country");
let select = document.querySelector("select");
let darkMoodBtn = document.querySelector("#dark-mood");
let header = document.querySelector("header");
let sec1 = document.querySelector(".sec1-index");
let formSelect = document.querySelector(".form-select");
let searchBtn = document.querySelector("#search-btn");
let card = document.querySelector(".card");
let cardBody = document.querySelector(".card-body");
let headerText = document.querySelector(".header-text");
let moonİcon = document.querySelector(".fa-moon");
let headerText2 = document.querySelector(".header-text2");
let filtered = [];

async function getAllData(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
        <a href="detail.html?name=${element.name}">
        <div class="col col-3">
          <div class="card">
            <img src="${element.flags.svg}" class="card-img-top" alt="Flag" />
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text"><b>Population:</b>${element.population}</p>
              <p class="card-text"><b>Region:</b>${element.region}</p>
              <p class="card-text"><b>Capital:</b>${element.capital}</p>
              </div>
              </div>
              </div></a
              >
              `;
  });
}

axios(Base_URL).then((res) => {
  getAllData(res.data);
});

input.addEventListener("input", (e) => {
  axios(Base_URL).then((res) => {
    filtered = res.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    getAllData(filtered);
  });
});

select.addEventListener("change", () => {
  axios(Base_URL).then((res) => {
    filtered = res.data.filter((item) => {
      return item.region
        .toLocaleLowerCase()
        .includes(select.value.toLocaleLowerCase());
    });
    getAllData(filtered);
  });
});

darkMoodBtn.addEventListener("click", () => {
  header.classList.toggle("dark-header");
  sec1.classList.toggle("dark-sec");
  formSelect.classList.toggle("dark-select");
  input.classList.toggle("dark-input");
  searchBtn.classList.toggle("dark-icon");
  headerText.classList.toggle("dark-text");
  headerText2.classList.toggle("dark-text");
  if (moonİcon.classList.contains("fa-solid")) {
    moonİcon.classList.add("fa-regular");
    moonİcon.classList.remove("fa-solid");
    moonİcon.style.color = "#fff";
  } else {
    moonİcon.classList.remove("fa-regular");
    moonİcon.classList.add("fa-solid");
    moonİcon.style.color = "#000";
  }
  // cardBody.classList.toggle("dark-text");
  // card.classList.toggle("dark-card");
  localStorage.setItem("dark",JSON.stringify("mode"));
});


