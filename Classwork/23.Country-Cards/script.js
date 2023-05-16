const Base_URL = "https://restcountries.com/v2/all";

let row = document.querySelector(".row");
let input = document.querySelector("#input-country");
let select = document.querySelector("select");
let darkModeBtn = document.querySelector("#dark-mood");

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

window.onload = function () {
  localStorage.getItem("dark") && document.body.classList.add("dark-mode");
  darkModeBtn.addEventListener("click", () => {
    if (localStorage.getItem("dark")) {
      localStorage.removeItem("dark");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark", "mode");
    }
  });
};
