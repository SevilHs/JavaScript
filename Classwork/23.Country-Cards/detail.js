const Base_URL = "https://restcountries.com/v3.1/name";
let countryName = new URLSearchParams(window.location.search).get("name");

let row = document.querySelector(".all-details");
let backBtn=document.querySelector('.back-btn')

async function getAllDetails() {
  const res = await axios(`${Base_URL}/${countryName}`);
  const data = res.data[0];
//   console.log(data);
  row.innerHTML = `
    <div class="col col-6">
        <img src="${data.flags.svg}" alt="" class="detail-img />
    </div>
    <div class="col col-6">
        <h1>${data.name.common}</h1>
        <div class="row">
            <div class="col col-6">
                <p><b>Native Name: </b>${Object.values(data.name.nativeName)[0].common}</p>
                <p><b>Population: </b>${data.population}</p>
                <p><b>Region: </b>${data.region}</p>
                <p><b>Sub Region: </b>${data.subregion}</p>
                <p><b>Capital: </b>${data.capital[0]}</p>
            </div>
            <div class="col col-6">
                <p><b>Top Level Domain: </b>${data.tld[0]}</p>
                <p><b>Currencies: </b>${Object.values(data.currencies)[0].name}</p>
                <p><b>Languages: </b>${data.languages.deu},${data.languages.fra},${data.languages.nld}</p>
            </div>
        </div>
        <div>
            <b>Border Countries: </b>
            <span class="border">${data.borders[0]}</span>
            <span class="border">${data.borders[1]}</span>
            <span class="border">${data.borders[2]}</span>
        </div>
    </div>
  `;
}
getAllDetails()

backBtn.addEventListener('click',()=>{
    window.location='index.html'
})

