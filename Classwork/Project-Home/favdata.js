const BASE_URL2 = "http://localhost:8000/favdata";

let row=document.querySelector('.row')

async function getAllData(){
    row.innerHTML=''
    const res=await axios(BASE_URL2)
    const data= res.data
    data.forEach(element => {
        row.innerHTML+=`
        <div class="col col-4 card-div">
        <div class="card" style="width: 17rem">
          <img
            class="card-img-top"
            src="${element.photo}"
            alt="Card image"
          />
          <div class="card-body">
            <h5 style="color: brown" class="card-title">${element.name}</h5>
            <hr />
            <p class="card-text">${element.price}</p>
            <button
              class="btn btn-danger"
              onclick="removeFav(${element.id})"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
        `
    });
}

getAllData()

async function removeFav(id){
    await axios.delete(`${BASE_URL2}/${id}`)
    getAllData()
}